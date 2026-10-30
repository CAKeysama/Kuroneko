#!/bin/sh
# Rebuild the Japanese font subsets from every CJK character the site prints.
set -eu
cd "${1:-$(dirname "$0")/..}"
CHARS=$(cat index.html design-system.html assets/js/store.js 2>/dev/null | python3 -I -c "
import sys
t=sys.stdin.read()
s=sorted({c for c in t if 0x3000<=ord(c)<=0x30FF or 0x4E00<=ord(c)<=0x9FFF or 0xFF00<=ord(c)<=0xFFEF})
print(''.join(s))")
echo "chars: $CHARS"
ENC=$(python3 -I -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$CHARS")
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
u1=$(curl -sS -A "$UA" "https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&text=$ENC" | grep -o 'https://[^)]*' | head -1)
u2=$(curl -sS -A "$UA" "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&text=$ENC" | grep -o 'https://[^)]*' | head -1)
curl -sS -o assets/fonts/mplus2-ja-subset.woff2 "$u1"
curl -sS -o assets/fonts/mplusrounded-800-ja-subset.woff2 "$u2"
ls -la assets/fonts
