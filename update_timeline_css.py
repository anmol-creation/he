import re

with open('css/timeline.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Yatra One to portal-card-title
portal_card_title_css = r'''\.portal-card-title \{
            font-size: 1\.1rem;
            font-weight: 600;'''
portal_card_title_css_new = r'''.portal-card-title {
    font-size: 1.4rem;
    font-family: 'Yatra One', cursive;
    font-weight: normal;'''
content = re.sub(portal_card_title_css, portal_card_title_css_new, content)

# Add Yatra One to historic-map-banner h2
banner_h2_css = r'''\.historic-map-banner h2 \{
    font-size: 2rem;
    margin-bottom: 0\.5rem;
    font-weight: 700;
\}'''
banner_h2_css_new = r'''.historic-map-banner h2 {
    font-size: 2.2rem;
    font-family: 'Yatra One', cursive;
    margin-bottom: 0.5rem;
    font-weight: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}'''
content = re.sub(banner_h2_css, banner_h2_css_new, content)

with open('css/timeline.css', 'w', encoding='utf-8') as f:
    f.write(content)
