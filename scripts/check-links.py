#!/usr/bin/env python3
"""Check local HTML/SVG destinations, fragments and duplicate IDs (no visual QA)."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.ids, self.links = [], []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.links.append(attrs[key])

errors, cache, checked = [], {}, 0
pages = [ROOT / arg for arg in sys.argv[1:]] if len(sys.argv) > 1 else sorted(ROOT.rglob('*.html'))
pages = [p for p in pages if '.git' not in p.parts and 'node_modules' not in p.parts]
for path in pages:
    if not path.is_file():
        errors.append(f'Missing page: {path.relative_to(ROOT)}')
        continue
    page = cache.setdefault(path, Page(path))
    for ident, count in Counter(page.ids).items():
        if count > 1:
            errors.append(f'{path.relative_to(ROOT)}: duplicate id {ident}')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = (ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)).resolve() if url.path else path
        if target.is_dir():
            target /= 'index.html'
        checked += 1
        if not target.is_file():
            errors.append(f'{path.relative_to(ROOT)}: missing {link}')
        elif url.fragment and target.suffix in ('.html', '.svg'):
            destination = cache.setdefault(target, Page(target))
            if unquote(url.fragment) not in destination.ids:
                errors.append(f'{path.relative_to(ROOT)}: missing fragment {link}')
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'Passed: {len(pages)} HTML pages, {checked} local references; no missing destinations/fragments or duplicate IDs.')
