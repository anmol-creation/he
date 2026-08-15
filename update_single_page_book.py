import re

with open('css/single-page-book.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Yatra One to .sp-title
sp_title_css = r'''\.sp-title \{
    font-size: 3\.5rem;
    color: var\(--primary-saffron\);
    margin-bottom: 1rem;
    font-weight: 700;
\}'''
sp_title_css_new = r'''.sp-title {
    font-size: 4rem;
    color: var(--primary-saffron);
    margin-bottom: 1rem;
    font-family: 'Yatra One', cursive;
    font-weight: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}'''
content = re.sub(sp_title_css, sp_title_css_new, content)

# Add Yatra One to .sp-index-title
sp_index_title_css = r'''\.sp-index-title \{
    font-size: 2\.2rem;
    color: var\(--primary-saffron\);
    border-bottom: 2px solid var\(--secondary-gold\);
    padding-bottom: 0\.5rem;
    margin-bottom: 2rem;
    text-align: center;
\}'''
sp_index_title_css_new = r'''.sp-index-title {
    font-size: 2.5rem;
    color: var(--primary-saffron);
    border-bottom: 2px solid var(--secondary-gold);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Yatra One', cursive;
    font-weight: normal;
}'''
content = re.sub(sp_index_title_css, sp_index_title_css_new, content)

# Add Yatra One to .sp-entity-name
sp_entity_name_css = r'''\.sp-entity-name \{
    font-size: 3rem;
    color: var\(--primary-saffron\);
    margin-bottom: 0\.5rem;
\}'''
sp_entity_name_css_new = r'''.sp-entity-name {
    font-size: 3.5rem;
    color: var(--primary-saffron);
    margin-bottom: 0.5rem;
    font-family: 'Yatra One', cursive;
    font-weight: normal;
}'''
content = re.sub(sp_entity_name_css, sp_entity_name_css_new, content)

with open('css/single-page-book.css', 'w', encoding='utf-8') as f:
    f.write(content)
