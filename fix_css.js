const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/\.sticker:active \{\n  cursor: grabbing;\n  z-index: 99999;\n\}/g, 
`.sticker:active {
  cursor: grabbing;
  transform: scale(1.12) rotate(4deg) !important;
  z-index: 99999;
}`);

fs.writeFileSync('styles.css', css);
