const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const regex = /let isDragging = false;\n    let startX, startY, origX, origY;[\s\S]*?sticker\.addEventListener\('pointercancel', endDrag\);\n  \}\);/g;

const replacement = `let isDragging = false;
    let startX, startY, startLeft, startTop;

    sticker.addEventListener('pointerdown', (e) => {
      isDragging = true;
      try { sticker.setPointerCapture(e.pointerId); } catch(e){}
      sfx.playBoing();

      startX = e.clientX;
      startY = e.clientY;
      
      const style = window.getComputedStyle(sticker);
      startLeft = parseFloat(style.left) || 0;
      startTop = parseFloat(style.top) || 0;
      
      // If it was percentage-based, it becomes pixels after we set it
    });

    sticker.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      sticker.style.left = \`\${startLeft + dx}px\`;
      sticker.style.top = \`\${startTop + dy}px\`;
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
