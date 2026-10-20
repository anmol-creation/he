import json
import os

with open('kundali-engine/data/yoga_rules.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

categories = {
    'राजयोग': [],
    'दोष': [],
    'धन योग': [],
    'शुभ योग': [],
    'ज्ञान/बुद्धि योग': [],
    'नाभस योग': [],
    'महा-कवच': [],
    'अन्य': []
}

for rule in data:
    rtype = rule.get('type', '')
    if 'राजयोग' in rtype:
        categories['राजयोग'].append(rule)
    elif 'दोष' in rtype:
        categories['दोष'].append(rule)
    elif 'धन' in rtype:
        categories['धन योग'].append(rule)
    elif 'शुभ' in rtype:
        categories['शुभ योग'].append(rule)
    elif 'ज्ञान' in rtype or 'बुद्धि' in rtype:
        categories['ज्ञान/बुद्धि योग'].append(rule)
    elif 'नाभस' in rtype:
        categories['नाभस योग'].append(rule)
    elif 'कवच' in rtype:
        categories['महा-कवच'].append(rule)
    else:
        categories['अन्य'].append(rule)

mapping = {
    'राजयोग': 'rajyogas.json',
    'दोष': 'doshas.json',
    'धन योग': 'wealth_yogas.json',
    'शुभ योग': 'auspicious_yogas.json',
    'ज्ञान/बुद्धि योग': 'knowledge_yogas.json',
    'नाभस योग': 'nabhas_yogas.json',
    'महा-कवच': 'maha_kavach.json',
    'अन्य': 'other_yogas.json'
}

os.makedirs('kundali-engine/data/rules', exist_ok=True)

for cat, rules in categories.items():
    if rules:
        filename = f"kundali-engine/data/rules/{mapping[cat]}"
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(rules, f, ensure_ascii=False, indent=2)
        print(f"Saved {len(rules)} rules to {filename}")
