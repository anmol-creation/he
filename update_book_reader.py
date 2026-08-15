import re

with open('pages/book-reader.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update body background to Parchment #fdf6ec
content = re.sub(r'body \{ margin: 0; padding: 0; display: flex; flex-direction: column; height: 100vh; background-color: #fcfcfc; \}',
                 r'body { margin: 0; padding: 0; display: flex; flex-direction: column; height: 100vh; background-color: #fdf6ec; /* Parchment */ }',
                 content)

# Update header title to use Yatra One
content = re.sub(r'\.header-title \{ font-size: 1\.5rem; font-weight: 600; margin-left: 20px; \}',
                 r'.header-title { font-size: 1.8rem; font-weight: normal; font-family: \'Yatra One\', cursive; margin-left: 20px; letter-spacing: 0.5px; }',
                 content)

# Update sidebar title to use Yatra One
content = re.sub(r'\.book-title-sidebar \{ padding: 0 1rem; color: var\(--primary-saffron\); font-weight: 600; font-size: 1\.2rem; margin-bottom: 1rem; \}',
                 r'.book-title-sidebar { padding: 0 1rem; color: var(--primary-saffron); font-weight: normal; font-family: \'Yatra One\', cursive; font-size: 1.5rem; margin-bottom: 1rem; letter-spacing: 0.5px; }',
                 content)

# Update reader-area background to Parchment and style text
content = re.sub(r'\#reader-area \{ flex: 1; overflow-y: auto; padding: 2rem 4rem; background: #fcfcfc; scroll-behavior: smooth; \}',
                 r'#reader-area { flex: 1; overflow-y: auto; padding: 2rem 4rem; background: #fdf6ec; scroll-behavior: smooth; }',
                 content)
content = re.sub(r'\.reader-content \{ max-width: 800px; margin: 0 auto; background: white; padding: 3rem; border-radius: 8px; box-shadow: 0 4px 15px rgba\(0,0,0,0\.05\); min-height: 80vh; \}',
                 r'.reader-content { max-width: 800px; margin: 0 auto; background: #fcfaf2; padding: 3rem; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); min-height: 80vh; border: 1px solid rgba(211,84,0,0.1); }',
                 content)

# Update reader-header h2 to use Yatra One
content = re.sub(r'\.reader-header h2 \{ color: var\(--primary-saffron\); margin-top: 0; font-size: 2rem; \}',
                 r'.reader-header h2 { color: var(--primary-saffron); margin-top: 0; font-size: 2.5rem; font-family: \'Yatra One\', cursive; font-weight: normal; text-align: center; }',
                 content)

# Update Shloka to use Yatra One for Devanagari feel
content = re.sub(r'\.shloka \{ font-weight: 600; color: var\(--primary-saffron\); font-size: 1\.2rem; margin-bottom: 0\.5rem; text-align: center; \}',
                 r'.shloka { font-weight: normal; font-family: \'Yatra One\', cursive; color: #b33900; font-size: 1.6rem; margin-bottom: 0.5rem; margin-top: 1.5rem; text-align: center; line-height: 1.6; }',
                 content)

# Update Anuvad to be legible
content = re.sub(r'\.anuvad \{ color: #444; \}',
                 r'.anuvad { color: #2c3e50; font-size: 1.1rem; line-height: 1.8; text-align: justify; margin-bottom: 1rem; }',
                 content)

with open('pages/book-reader.html', 'w', encoding='utf-8') as f:
    f.write(content)
