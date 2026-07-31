import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://en.wikipedia.org/wiki/Mewar_dynasty"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    for heading in soup.find_all(['h2', 'h3']):
        if 'Rulers' in heading.text or 'List' in heading.text:
            print("Found list!")
            sibling = heading.find_next_sibling()
            while sibling and sibling.name not in ['h2', 'h3']:
                if sibling.name == 'ul' or sibling.name == 'ol':
                    for li in sibling.find_all('li'):
                        print(li.text)
                sibling = sibling.find_next_sibling()
except Exception as e:
    print(e)
