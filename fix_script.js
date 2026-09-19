const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const regex = /let isDragging = false;[\s\S]*?sticker\.addEventListener\('pointerup', endDrag\);\n    sticker\.addEventListener\('pointercancel', endDrag\);\n  \}\);/g;

const replacement = `let isDragging = false;
    let startX, startY, origX, origY;

    sticker.addEventListener('pointerdown', (e) => {
      isDragging = true;
      try { sticker.setPointerCapture(e.pointerId); } catch(e){}
      sfx.playBoing();

      const rect = sticker.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      origX = rect.left;
      origY = rect.top;

      sticker.style.position = 'fixed';
      sticker.style.left = \`\${origX}px\`;
      sticker.style.top = \`\${origY}px\`;
      sticker.style.zIndex = '999';
    });

    sticker.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      sticker.style.left = \`\${origX + dx}px\`;
      sticker.style.top = \`\${origY + dy}px\`;
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      try { sticker.releasePointerCapture(e.pointerId); } catch(e){}
      sfx.playClick();
      confetti.burst(e.clientX, e.clientY, 15);
    };

    sticker.addEventListener('pointerup', endDrag);
    sticker.addEventListener('pointercancel', endDrag);
  });`;

code = code.replace(regex, replacement);
fs.writeFileSync('script.js', code);
