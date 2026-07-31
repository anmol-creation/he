import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://en.wikipedia.org/wiki/Dogra_dynasty"
html = urllib.request.urlopen(url).read().decode('utf-8')
soup = BeautifulSoup(html, 'html.parser')
text = soup.get_text()

matches = re.finditer(r'.{0,50}Agnigarbha.{0,50}', text, re.IGNORECASE)
for m in matches:
    print(m.group(0).strip())
