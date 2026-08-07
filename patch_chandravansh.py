import re

file_path = 'js/data/historic-map-data/brahma/chandravansh.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The user wants to cluster EVERYTHING under Chandravansh (i.e. 'pururava' onwards).
# In the original file, the whole file basically describes Chandravansh.
# If we cluster ALL of it into a single cluster "चंद्रवंश", we can create a proxy node under `budh_chandra`
# and assign `clusterName: 'चंद्रवंश'` to every node that appears after `ila_chandra` (inclusive/exclusive of Pururava?)
# Wait, let's carefully evaluate what the user asked:
# "Create 'चंद्रवंश' cluster under Budh.."
# "The user's request to cluster the entirety of "Chandravansh" after Budh (`pururava` onwards) is pending a safe approach, as applying a single `clusterName` will overwrite all existing nested sub-clusters in that file."
