import re

with open('pages/digital-library.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update background color to match parchment design system #fdf6ec
content = re.sub(r'background-color: #fcfaf2;', 'background-color: #fdf6ec; /* Parchment */', content)

# Add Yatra One to accordion-header
accordion_header_css = r'''\.accordion-header \{
            background-color: white;
            color: #d35400;'''
accordion_header_css_new = r'''.accordion-header {
            background-color: white;
            color: #d35400;
            font-family: 'Yatra One', cursive;
            letter-spacing: 0.5px;'''
content = re.sub(accordion_header_css, accordion_header_css_new, content)

# Add Yatra One to sub-category
sub_category_css = r'''\.sub-category \{
            margin-top: 1rem;'''
sub_category_css_new = r'''.sub-category {
            margin-top: 1rem;
            font-family: 'Yatra One', cursive;
            font-weight: normal;'''
content = re.sub(sub_category_css, sub_category_css_new, content)

# Update sub-category font size for Yatra One to pop
content = re.sub(r'font-size: 1\.1rem;\s*font-weight: 600;\s*border-bottom: 2px dashed #eee;', r'font-size: 1.4rem;\n            border-bottom: 2px dashed rgba(211, 84, 0, 0.2);', content)

# Update header background for a more premium cinematic feel
header_bg_css = r'''\.header \{
            background: linear-gradient\(135deg, #d35400, #e67e22\);'''
header_bg_css_new = r'''.header {
            background: linear-gradient(135deg, #d35400 0%, #b33900 100%);
            border-bottom: 4px solid #f39c12;'''
content = re.sub(header_bg_css, header_bg_css_new, content)

with open('pages/digital-library.html', 'w', encoding='utf-8') as f:
    f.write(content)
