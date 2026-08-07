import re

with open('js/layout-engine/tree-builder.js', 'r') as f:
    content = f.read()

# We need to deep copy nodes before processing, or just don't mutate `node.parent`.
# Wait, processedData contains the nodes to be added.
# In the first loop: rawData.forEach(node => { ... processedData.push({...node}); }) might be better.
