import re

file_path = 'js/data/historic-map-data/brahma/chandravansh.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# First we need to find where Budh is and the rest of the lineage.
budh_index = content.find("id: 'budh'")
pururava_index = content.find("id: 'pururava'")

print(f"Budh index: {budh_index}, Pururava index: {pururava_index}")

# Get all IDs in Chandravansh
ids = re.findall(r"id:\s*'([^']+)'", content)
print(f"Total IDs in Chandravansh: {len(ids)}")
