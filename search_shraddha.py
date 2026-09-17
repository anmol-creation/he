import urllib.request
import urllib.parse
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

query = urllib.parse.quote("Shraddha daughter of Vaivasvata Manu wife")
url = f"https://html.duckduckgo.com/html/?q={query}"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    import re
    from html import unescape
    results = re.findall(r'<a class="result__snippet[^>]*>(.*?)</a>', html, re.IGNORECASE | re.DOTALL)
    for res in results[:5]:
        print(unescape(re.sub(r'<[^>]+>', '', res)).strip())
except Exception as e:
    print("Error:", e)
