import re

with open('js/map-ui.js', 'r') as f:
    content = f.read()

# Update the Info Box data display to use `data.spouse` instead of just `data.spouseOf` as fallback
old_jeevan = '''        if (tab === 'jeevan') {
            let relationsHtml = '<ul class="relation-list">';
            if (data.father) relationsHtml += `<li><strong>पिता:</strong> ${this.getEntityName(data.father)}</li>`;
            else if (data.parent && data.parent !== 'unknown_origin') relationsHtml += `<li><strong>पिता/पूर्वज:</strong> ${this.getEntityName(data.parent)}</li>`;

            if (data.mother) relationsHtml += `<li><strong>माता:</strong> ${this.getEntityName(data.mother)}</li>`;

            if (data.spouseOf) relationsHtml += `<li><strong>पति/पत्नी:</strong> ${this.getEntityName(data.spouseOf)}</li>`;'''

new_jeevan = '''        if (tab === 'jeevan') {
            let relationsHtml = '<ul class="relation-list">';
            if (data.father) relationsHtml += `<li><strong>पिता:</strong> ${this.getEntityName(data.father)}</li>`;
            else if (data.parent && data.parent !== 'unknown_origin') relationsHtml += `<li><strong>पिता/पूर्वज:</strong> ${this.getEntityName(data.parent)}</li>`;

            if (data.mother) relationsHtml += `<li><strong>माता:</strong> ${this.getEntityName(data.mother)}</li>`;

            if (data.spouse) relationsHtml += `<li><strong>पति/पत्नी:</strong> ${this.getEntityName(data.spouse)}</li>`;
            else if (data.spouseOf) relationsHtml += `<li><strong>पति/पत्नी:</strong> ${this.getEntityName(data.spouseOf)}</li>`;'''

content = content.replace(old_jeevan, new_jeevan)

with open('js/map-ui.js', 'w') as f:
    f.write(content)
