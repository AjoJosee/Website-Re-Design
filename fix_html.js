const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('left: 76%; background: var(--tinker-cyan); color: var(--tinker-black); transform: rotate(12deg);',
'left: 50%; background: var(--tinker-cyan); color: var(--tinker-black); transform: translateX(-50%) rotate(12deg);');

fs.writeFileSync('index.html', html);
