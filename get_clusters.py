import re

file_path = 'js/data/historic-map-data/brahma/chandravansh.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all clusterNames
clusters = re.findall(r"clusterName:\s*'([^']+)'", content)
unique_clusters = set(clusters)
print("Existing clusters in chandravansh.js:")
for c in unique_clusters:
    print(f" - {c}")
