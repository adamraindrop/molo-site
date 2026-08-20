#!/usr/bin/env python3
"""Stylesheet integrity check.

Catches the failure mode that broke the desktop layout once already: a rule
edited or removed by hand leaves a stray brace, which closes an enclosing
@media block early and silently leaks phone rules to every width. Nothing about
that overflows or collides, so a visual/layout QA pass will not see it.
"""
import re, sys, pathlib

def check(path):
    src = pathlib.Path(path).read_text(encoding='utf-8')
    body = re.sub(r'/\*.*?\*/', '', src, flags=re.S)
    problems, depth, line = [], 0, 1
    for ch in body:
        if ch == '\n': line += 1
        elif ch == '{': depth += 1
        elif ch == '}':
            depth -= 1
            if depth < 0:
                problems.append(f'{path}:{line}: unbalanced closing brace')
                depth = 0
    if depth:
        problems.append(f'{path}: {depth} unclosed block(s) at EOF')

    # a declaration sitting at top level, outside any selector
    depth = 0
    for n, raw in enumerate(body.split('\n'), 1):
        l = raw.strip()
        opens, closes = l.count('{'), l.count('}')
        if depth == 0 and l and not l.startswith('@') and ':' in l and '{' not in l:
            problems.append(f'{path}:{n}: declaration outside any rule -> {l[:60]}')
        depth += opens - closes
    return problems

bad = []
for f in sys.argv[1:] or ['assets/site.css']:
    bad += check(f)
for b in bad: print(b)
print(f'{len(bad)} problem(s)')
sys.exit(1 if bad else 0)
