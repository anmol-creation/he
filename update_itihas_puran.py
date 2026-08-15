import re

with open('pages/itihas-puran.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Yatra One to inline h2 in the portal page (Book Link Area)
content = content.replace('h2 style="color: white; font-size: 2rem; margin-bottom: 1rem;"', 'h2 style="color: white; font-size: 2.2rem; margin-bottom: 1rem; font-family: \'Yatra One\', cursive; text-shadow: 1px 1px 3px rgba(0,0,0,0.3); font-weight: normal;"')

with open('pages/itihas-puran.html', 'w', encoding='utf-8') as f:
    f.write(content)
