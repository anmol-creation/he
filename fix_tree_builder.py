import re

with open('js/layout-engine/tree-builder.js', 'r') as f:
    content = f.read()

# Fix the bug where we stripped spouseOf from male nodes completely.
# We need to preserve it for the Info Box, but ignore it for visual routing.

# 1. Revert the node definition block
old_block = '''            // NORMAL NODE (Male, or Unmarried Female, or Wife without Father)
            node.parent = visualParent;
            node.spouseOf = visualSpouse;
            processedData.push(node);'''

new_block = '''            // NORMAL NODE (Male, or Unmarried Female, or Wife without Father)
            node.parent = visualParent;
            // node.spouseOf remains intact for data/Info Box, but we add visualSpouse for rendering checks if needed.
            node.visualSpouse = visualSpouse;
            processedData.push(node);'''
content = content.replace(old_block, new_block)

# 2. Update layout flags to use visualSpouse so males don't get wife styling
old_layout = '''            layout: {
                x: 0,
                width: 200,
                contours: { min: [], max: [] },
                isSpouse: !!node.spouseOf
            }'''
new_layout = '''            layout: {
                x: 0,
                width: 200,
                contours: { min: [], max: [] },
                isSpouse: !!node.visualSpouse
            }'''
content = content.replace(old_layout, new_layout)

# 3. Update proxy node to keep spouseOf intact for info box but use visualSpouse for routing
old_proxy = '''                       spouseOf: visualSpouse,
                       isCluster: true,'''
new_proxy = '''                       spouseOf: node.spouseOf, // Keep original data
                       visualSpouse: visualSpouse, // For layout engine
                       isCluster: true,'''
content = content.replace(old_proxy, new_proxy)

# 4. We also need to fix where tree-builder checks node.spouseOf for layout logic to use visualSpouse
content = content.replace('if (proxyNode.spouseOf && proxyNode.parent)', 'if (proxyNode.visualSpouse && proxyNode.parent)')
content = content.replace('node.spouseOf = null; // Strip visual spouse so she stays a daughter', 'node.visualSpouse = null; node.spouseOf = null; // Daughter shouldn\'t show as spouse in UI or layout')
content = content.replace('isSpouse: false', 'isSpouse: false') # Unchanged

# Let's just do a blanket regex for layout checks
# In pre-populate spouses:
content = content.replace('if (node.spouseOf && nodesMap.has(node.spouseOf))', 'if (node.visualSpouse && nodesMap.has(node.visualSpouse))')
content = content.replace('const partner = nodesMap.get(node.spouseOf);', 'const partner = nodesMap.get(node.visualSpouse);')

# In routing children vertically:
content = content.replace('if (node.spouseOf) {', 'if (node.visualSpouse) {')
content = content.replace('!nodesMap.has(node.spouseOf)', '!nodesMap.has(node.visualSpouse)')
content = content.replace('missing spouse \'${node.spouseOf}\'', 'missing spouse \'${node.visualSpouse}\'')
content = content.replace('(!node.spouseOf || node.isCluster)', '(!node.visualSpouse || node.isCluster)')

with open('js/layout-engine/tree-builder.js', 'w') as f:
    f.write(content)
