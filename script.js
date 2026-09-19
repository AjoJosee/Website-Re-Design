/**
 * TinkerHub CET - Revanced Edition
 * Interactive Engine: Audio, Physics, Draggable Stickers, Generators, Confetti & Rickrolls!
 */

// ==========================================
// 1. SOUND SYNTHESIZER (Web Audio API)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  playStamp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.18);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + (i * 0.08);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    });
  }

  playRickTune() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    // Chiptune snippet: "Never gonna give you up"
    const melody = [
      { f: 392.00, d: 0.15 }, // G4
      { f: 440.00, d: 0.15 }, // A4
      { f: 523.25, d: 0.25 }, // C5
      { f: 440.00, d: 0.2 },  // A4
      { f: 659.25, d: 0.4 },  // E5
      { f: 659.25, d: 0.3 },  // E5
      { f: 587.33, d: 0.5 },  // D5
    ];
    let time = this.ctx.currentTime + 0.05;
    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(note.f, time);
      gain.gain.setValueAtTime(0.2, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + note.d);
      time += note.d + 0.04;
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 2. CANVAS CONFETTI PARTICLES
// ==========================================
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.colors = ['#FFCD10', '#205B67', '#95BF15', '#05BFCE', '#EE1700', '#0060FF'];
    this.running = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 60) {
    if (!this.canvas) return;
    const originX = x || window.innerWidth / 2;
    const originY = y || window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: Math.random() * 9 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 16,
        life: 1,
        decay: Math.random() * 0.02 + 0.015
      });
    }

    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  animate() {
    if (!this.running || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vr;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.running = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiEngine();

// ==========================================
// 3. DRAGGABLE STICKERS EVERYWHERE
// ==========================================
function initDraggableStickers() {
  const stickers = document.querySelectorAll('.sticker');

  stickers.forEach(sticker => {
    let isDragging = false;
    let startX, startY, origX, origY;

    sticker.addEventListener('pointerdown', (e) => {
      isDragging = true;
      sticker.setPointerCapture(e.pointerId);
      sfx.playPop();

      const rect = sticker.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      origX = rect.left;
      origY = rect.top;

      sticker.style.position = 'fixed';
      sticker.style.left = `${origX}px`;
      sticker.style.top = `${origY}px`;
      sticker.style.zIndex = '999';
    });

    sticker.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      sticker.style.left = `${origX + dx}px`;
      sticker.style.top = `${origY + dy}px`;
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      sticker.releasePointerCapture(e.pointerId);
      sfx.playClick();
      confetti.burst(e.clientX, e.clientY, 15);
    };

    sticker.addEventListener('pointerup', endDrag);
    sticker.addEventListener('pointercancel', endDrag);
  });
}

// ==========================================
// 4. INTERACTIVE CERTIFICATE OF CERTIFIED TINKERER
// ==========================================
function initCertificateGenerator() {
  const nameInput = document.getElementById('cert-input-name');
  const branchSelect = document.getElementById('cert-input-branch');
  const superpowerSelect = document.getElementById('cert-input-superpower');
  const stampBtn = document.getElementById('btn-stamp-cert');
  const printBtn = document.getElementById('btn-print-cert');

  const displayName = document.getElementById('cert-preview-name');
  const displayRole = document.getElementById('cert-preview-role');
  const displayStamp = document.getElementById('cert-preview-stamp');
  const displaySerial = document.getElementById('cert-preview-serial');

  if (!nameInput || !stampBtn) return;

  function updatePreview() {
    displayName.textContent = nameInput.value.trim() || 'Your Name Here';
    displayRole.textContent = `${branchSelect.value} · ${superpowerSelect.value}`;
  }

  nameInput.addEventListener('input', () => {
    updatePreview();
    sfx.playClick();
  });

  branchSelect.addEventListener('change', () => {
    updatePreview();
    sfx.playClick();
  });

  superpowerSelect.addEventListener('change', () => {
    updatePreview();
    sfx.playClick();
  });

  stampBtn.addEventListener('click', (e) => {
    sfx.playStamp();
    sfx.playFanfare();
    
    // Generate funny unique serial
    const randomHex = Math.floor(Math.random() * 899999 + 100000);
    displaySerial.textContent = `CET-TINKER-${randomHex}`;

    // Stamp animation
    displayStamp.style.animation = 'none';
    displayStamp.offsetHeight; // trigger reflow
    displayStamp.style.animation = 'stampSlam 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards';

    const rect = displayStamp.getBoundingClientRect();
    confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 70);
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      sfx.playPop();
      window.print();
    });
  }
}

// ==========================================
// 5. HANDBOOK-COMPLIANT POSTER / STATUS MAKER
// ==========================================
function initStatusMaker() {
  const titleInput = document.getElementById('status-input-title');
  const speakerInput = document.getElementById('status-input-speaker');
  const typeSelect = document.getElementById('status-input-type');
  const themeToggle = document.getElementById('status-theme-select');
  const colorSelect = document.getElementById('status-accent-select');

  const frame = document.getElementById('status-preview-frame');
  const posterTitle = document.getElementById('status-poster-title');
  const posterSpeaker = document.getElementById('status-poster-speaker');
  const posterTag = document.getElementById('status-poster-tag');
  const innerPoster = document.getElementById('status-inner-poster');

  if (!titleInput || !frame) return;

  function updateStatus() {
    if (posterTitle) posterTitle.textContent = titleInput.value.trim() || "Event Title Here";
    if (posterSpeaker) posterSpeaker.textContent = speakerInput.value.trim() ? `Speaker: ${speakerInput.value.trim()}` : "Speaker: TBA";
    if (posterTag) posterTag.textContent = typeSelect.value;

    // Checkerboard Alternation: Light Theme vs Dark Theme
    if (themeToggle.value === 'dark') {
      frame.classList.remove('light-spec');
      frame.classList.add('dark-spec');
    } else {
      frame.classList.remove('dark-spec');
      frame.classList.add('light-spec');
    }

    // Apply handbook accent color
    const accent = colorSelect.value;
    innerPoster.style.borderColor = accent;
    if (posterTag) {
      posterTag.style.backgroundColor = accent;
      posterTag.style.color = (accent === '#FFCD10' || accent === '#95BF15' || accent === '#05BFCE') ? '#1A1F20' : '#FFFFFF';
    }
  }

  [titleInput, speakerInput, typeSelect, themeToggle, colorSelect].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        updateStatus();
        sfx.playClick();
      });
      el.addEventListener('change', () => {
        updateStatus();
        sfx.playPop();
      });
    }
  });

  updateStatus();
}

// ==========================================
// 6. PROJECTS UPVOTE ENGINE (Stored in LocalStorage)
// ==========================================
function initProjectUpvotes() {
  const upvoteBtns = document.querySelectorAll('.upvote-btn');

  upvoteBtns.forEach(btn => {
    const id = btn.dataset.projectId;
    const countSpan = btn.querySelector('.upvote-count');
    const stored = localStorage.getItem(`tinker_upvote_${id}`);

    if (stored) {
      countSpan.textContent = stored;
      btn.classList.add('upvoted');
    }

    btn.addEventListener('click', (e) => {
      sfx.playPop();
      let count = parseInt(countSpan.textContent, 10) || 0;
      if (btn.classList.contains('upvoted')) {
        count = Math.max(0, count - 1);
        btn.classList.remove('upvoted');
        localStorage.removeItem(`tinker_upvote_${id}`);
      } else {
        count++;
        btn.classList.add('upvoted');
        localStorage.setItem(`tinker_upvote_${id}`, count);
        sfx.playFanfare();
        const rect = btn.getBoundingClientRect();
        confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
      }
      countSpan.textContent = count;
    });
  });
}

// ==========================================
// 7. EVENTS FILTER TABS
// ==========================================
function initEventsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      eventCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 8. RICKROLL & EASTER EGG ENGINE 🕺
// ==========================================
function initRickrollTraps() {
  const overlay = document.getElementById('rickroll-overlay');
  const closeBtn = document.getElementById('tv-close-btn');
  const traps = document.querySelectorAll('.rickroll-trap');
  const tvIframe = document.getElementById('tv-video-player');

  if (!overlay) return;

  function triggerRickroll(customMsg) {
    sfx.playRickTune();
    const titleEl = overlay.querySelector('.rick-marquee');
    if (titleEl && customMsg) {
      titleEl.textContent = customMsg;
    }
    overlay.classList.add('active');
    confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 100);

    // Auto load embed if iframe exists
    if (tvIframe && !tvIframe.src.includes('dQw4w9WgXcQ')) {
      tvIframe.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1";
    }
  }

  traps.forEach(trap => {
    trap.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = trap.dataset.rickMsg || "YOU'VE BEEN TINKER-ROLLED! 🕺";
      triggerRickroll(msg);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sfx.playClick();
      overlay.classList.remove('active');
      if (tvIframe) {
        tvIframe.src = "";
      }
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      if (tvIframe) tvIframe.src = "";
    }
  });

  // Konami Code Easter Egg (Up Up Down Down Left Right Left Right B A)
  const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        triggerRickroll("SECRET EXPLICIT KONAMI CODE TINKER-ROLL! 🎮");
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

// ==========================================
// 9. THEME & SOUND CONTROLS
// ==========================================
function initThemeAndAudioControls() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const soundToggle = document.getElementById('sound-toggle-btn');

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      sfx.playPop();
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      confetti.burst(themeToggle.getBoundingClientRect().left, themeToggle.getBoundingClientRect().top, 30);
    });
  }

  // Sound Toggle
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      sfx.enabled = !sfx.enabled;
      if (sfx.enabled) sfx.playPop();
      soundToggle.textContent = sfx.enabled ? '🔊' : '🔇';
      soundToggle.title = sfx.enabled ? 'Mute Sounds' : 'Unmute Sounds';
    });
  }
}

// ==========================================
// 10. BOOTSTRAP ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initDraggableStickers();
  initCertificateGenerator();
  initStatusMaker();
  initProjectUpvotes();
  initEventsFilter();
  initRickrollTraps();
  initThemeAndAudioControls();

  // Play initial chime on first user click
  window.addEventListener('click', () => sfx.init(), { once: true });
});
