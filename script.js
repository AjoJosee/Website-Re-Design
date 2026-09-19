/**
 * TinkerHub CET - Revanced Edition
 * Interactive Engine: Multi-Sound Synthesizer, Scroll Animations, Certificate PNG Downloader,
 * Multi-Prank System (KTU Panic, Matrix Hack, Anti-Gravity, Rickroll 2.0), Draggable Stickers & Confetti
 */

// ==========================================
// 1. EXTENDED SOUND SYNTHESIZER (Web Audio API)
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
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.07);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1300, now);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.035);
  }

  playBoing() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(250, now + 0.25);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playSqueak() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.linearRampToValueAtTime(1600, now + 0.08);
    osc.frequency.linearRampToValueAtTime(1200, now + 0.16);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  playChaChing() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Two metallic bells in quick succession
    [1046.50, 1318.51].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = now + (i * 0.09);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.35, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + 0.35);
    });
  }

  playLaser() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.18);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  playSiren() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.linearRampToValueAtTime(1000, now + 0.2);
    osc.frequency.linearRampToValueAtTime(600, now + 0.4);
    osc.frequency.linearRampToValueAtTime(1000, now + 0.6);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.7);
  }

  playStamp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.22);
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.24);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + (i * 0.08);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    });
  }

  playRickTune() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    // Chiptune 8-bit riff of "Never gonna give you up"
    const melody = [
      { f: 392.00, d: 0.14 }, // G4
      { f: 440.00, d: 0.14 }, // A4
      { f: 523.25, d: 0.22 }, // C5
      { f: 440.00, d: 0.18 }, // A4
      { f: 659.25, d: 0.36 }, // E5
      { f: 659.25, d: 0.28 }, // E5
      { f: 587.33, d: 0.45 }, // D5
    ];
    let time = this.ctx.currentTime + 0.05;
    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(note.f, time);
      gain.gain.setValueAtTime(0.18, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + note.d);
      time += note.d + 0.03;
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

  burst(x, y, count = 55) {
    if (!this.canvas) return;
    const originX = x || window.innerWidth / 2;
    const originY = y || window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 11 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3.5,
        size: Math.random() * 8 + 4,
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
      p.vy += 0.32;
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
// 3. SCROLL PROGRESS & REVEAL ANIMATIONS
// ==========================================
function initScrollEngine() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const reveals = document.querySelectorAll('.reveal-on-scroll');

  // Scroll Progress Bar Update
  window.addEventListener('scroll', () => {
    if (progressBar) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }
  }, { passive: true });

  // IntersectionObserver for staggered reveals
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }
}

// ==========================================
// 4. DRAGGABLE STICKERS WITH SOUNDS
// ==========================================
function initDraggableStickers() {
  const stickers = document.querySelectorAll('.sticker');

  stickers.forEach(sticker => {
    let isDragging = false;
    let startX, startY, origX, origY;

    sticker.addEventListener('pointerdown', (e) => {
      isDragging = true;
      sticker.setPointerCapture(e.pointerId);
      sfx.playBoing();

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
// 5. CERTIFICATE GENERATOR (PRINT & PNG DOWNLOAD)
// ==========================================
function initCertificateGenerator() {
  const nameInput = document.getElementById('cert-input-name');
  const branchSelect = document.getElementById('cert-input-branch');
  const superpowerSelect = document.getElementById('cert-input-superpower');
  const stampBtn = document.getElementById('btn-stamp-cert');
  const printBtn = document.getElementById('btn-print-cert');
  const downloadBtn = document.getElementById('btn-download-cert');

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

  // Isolated Print Dialog: ONLY prints the certificate!
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      sfx.playPop();
      window.print();
    });
  }

  // Direct PNG Image Download using Canvas
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      sfx.playChaChing();
      downloadCertificatePNG();
    });
  }
}

// Generate real downloadable PNG for the certificate
function downloadCertificatePNG() {
  const name = document.getElementById('cert-preview-name').textContent;
  const role = document.getElementById('cert-preview-role').textContent;
  const serial = document.getElementById('cert-preview-serial').textContent;

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');

  // Background Paper
  ctx.fillStyle = '#FFFDF4';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Distressed Double Border
  ctx.strokeStyle = '#1A1F20';
  ctx.lineWidth = 12;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
  ctx.lineWidth = 4;
  ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

  // Ornaments & Header
  ctx.textAlign = 'center';
  ctx.fillStyle = '#205B67';
  ctx.font = 'bold 24px monospace';
  ctx.fillText('❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖', canvas.width / 2, 95);

  ctx.fillStyle = '#596568';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('TINKERHUB FOUNDATION · CET CAMPUS CHAPTER', canvas.width / 2, 140);

  ctx.fillStyle = '#1A1F20';
  ctx.font = '900 48px sans-serif';
  ctx.fillText('CERTIFICATE OF TINKERING', canvas.width / 2, 210);

  ctx.fillStyle = '#596568';
  ctx.font = '22px monospace';
  ctx.fillText('This solemnly certifies that', canvas.width / 2, 275);

  // Recipient Name
  ctx.fillStyle = '#205B67';
  ctx.font = 'bold 64px cursive, sans-serif';
  ctx.fillText(name, canvas.width / 2, 360);

  // Underline
  ctx.strokeStyle = '#1A1F20';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 250, 385);
  ctx.lineTo(canvas.width / 2 + 250, 385);
  ctx.stroke();

  // Statement
  ctx.fillStyle = '#1A1F20';
  ctx.font = '22px monospace';
  ctx.fillText('has been officially designated a Certified Tinkerer at the', canvas.width / 2, 440);
  ctx.fillText('College of Engineering, Trivandrum.', canvas.width / 2, 475);
  ctx.fillText('Guaranteed 0% bureaucracy, infinite curiosity, and licensed to build.', canvas.width / 2, 510);

  // Role
  ctx.fillStyle = '#95BF15';
  ctx.font = 'bold 24px monospace';
  ctx.fillText(role, canvas.width / 2, 570);

  // Bottom Metadata
  ctx.textAlign = 'left';
  ctx.fillStyle = '#596568';
  ctx.font = '18px monospace';
  ctx.fillText(`SERIAL: ${serial}`, 80, 710);
  ctx.fillText('ISSUED: 19 SEPTEMBER 2026 · EXPIRES: NEVER', 80, 735);

  // Red Stamp (TINKER APPROVED)
  ctx.save();
  ctx.translate(canvas.width - 240, 680);
  ctx.rotate(-0.12);
  ctx.strokeStyle = '#EE1700';
  ctx.fillStyle = '#EE1700';
  ctx.lineWidth = 4;
  ctx.strokeRect(-120, -50, 240, 80);
  ctx.textAlign = 'center';
  ctx.font = 'bold 24px monospace';
  ctx.fillText('TINKER APPROVED', 0, -10);
  ctx.font = 'bold 16px monospace';
  ctx.fillText('CET CHAPTER', 0, 18);
  ctx.restore();

  // Trigger download
  const link = document.createElement('a');
  link.download = `Certified-Tinkerer-${name.replace(/\s+/g, '-')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 80);
}

// ==========================================
// 6. MULTI-PRANK ENGINE: 4 UNIQUE PRANKS
// ==========================================
function initPrankEngine() {
  // Prank 1: KTU Attendance Shortage Panic
  const ktuTriggers = document.querySelectorAll('.trigger-ktu-panic');
  const ktuModal = document.getElementById('prank-ktu-modal');
  const btnBribe = document.getElementById('btn-bribe-dean');
  const btnRunMech = document.getElementById('btn-run-mech');

  ktuTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playSiren();
      if (ktuModal) ktuModal.classList.add('active');
    });
  });

  if (btnBribe) {
    btnBribe.addEventListener('click', () => {
      sfx.playSqueak();
      alert('🥟 BRIBE REJECTED!\n\nThe Dean is on a low-carb diet. Attendance shortage remains at 41.2%.\nPlease report to Mechanical Workshop at 8:30 AM tomorrow!');
      if (ktuModal) ktuModal.classList.remove('active');
    });
  }

  if (btnRunMech) {
    btnRunMech.addEventListener('click', () => {
      sfx.playLaser();
      if (ktuModal) ktuModal.classList.remove('active');
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
    });
  }

  // Prank 2: The CRT Matrix Hacker Terminal
  const matrixTriggers = document.querySelectorAll('.trigger-matrix-hack');
  const matrixModal = document.getElementById('prank-matrix-modal');
  const matrixStream = document.getElementById('matrix-terminal-stream');
  const matrixClose = document.getElementById('btn-matrix-close');

  matrixTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playLaser();
      if (matrixModal) {
        matrixModal.classList.add('active');
        runMatrixStream(matrixStream);
      }
    });
  });

  if (matrixClose) {
    matrixClose.addEventListener('click', () => {
      sfx.playClick();
      if (matrixModal) matrixModal.classList.remove('active');
    });
  }

  // Prank 3: Anti-Gravity Chaos Mode
  const antiGravityTriggers = document.querySelectorAll('.trigger-antigravity');
  const antiGravityBanner = document.getElementById('antigravity-reset-banner');
  const btnResetGravity = document.getElementById('btn-reset-gravity');

  antiGravityTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playSiren();
      document.body.classList.add('chaos-mode');
      if (antiGravityBanner) antiGravityBanner.style.display = 'flex';
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 90);
    });
  });

  if (btnResetGravity) {
    btnResetGravity.addEventListener('click', () => {
      sfx.playFanfare();
      document.body.classList.remove('chaos-mode');
      if (antiGravityBanner) antiGravityBanner.style.display = 'none';
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
    });
  }

  // Prank 4: Rickroll 2.0 (Retro TV with animated GIF)
  const rickTriggers = document.querySelectorAll('.trigger-rickroll');
  const rickModal = document.getElementById('rickroll-overlay');
  const rickClose = document.getElementById('tv-close-btn');

  rickTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playRickTune();
      if (rickModal) rickModal.classList.add('active');
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 80);
    });
  });

  if (rickClose) {
    rickClose.addEventListener('click', () => {
      sfx.playClick();
      if (rickModal) rickModal.classList.remove('active');
    });
  }

  // Close modals when clicking backdrop
  document.querySelectorAll('.prank-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

function runMatrixStream(container) {
  if (!container) return;
  container.textContent = '';
  const lines = [
    '[INIT] Connecting to KTU Exam Database via student WiFi...',
    '[AUTH] Bypassing firewall using password: "admin1234"... SUCCESS.',
    '[SCAN] Locating tomorrow\'s Series Exam question paper...',
    '[EXTRACT] Decrypting Question 1: "State the difference between writing code and daydreaming about code."',
    '[EXTRACT] Decrypting Question 2: "Explain why CSS centering took 3 hours yesterday."',
    '[OVERWRITE] Injecting S-Grade CGPA for all TinkerHub CET members...',
    '[ERROR] KTU Server ran out of memory (4MB RAM detected).',
    '[CONCLUSION] There are no shortcuts, friend! But join TinkerHub CET and you will actually know how to build the whole system from scratch.',
    '>>> EXPLOIT COMPLETED. HAVE A NICE DAY! ⚡'
  ];

  let i = 0;
  function addLine() {
    if (i < lines.length) {
      container.textContent += lines[i] + '\n\n';
      container.scrollTop = container.scrollHeight;
      sfx.playClick();
      i++;
      setTimeout(addLine, 350);
    }
  }
  addLine();
}

// ==========================================
// 7. PROJECT UPVOTE PERSISTENCE
// ==========================================
function initProjectUpvotes() {
  const upvoteBtns = document.querySelectorAll('.upvote-btn');

  upvoteBtns.forEach(btn => {
    const id = btn.dataset.projectId;
    const countSpan = btn.querySelector('.upvote-count');
    const stored = localStorage.getItem(`tinker_upvote_${id}`);

    if (stored && countSpan) {
      countSpan.textContent = stored;
      btn.classList.add('upvoted');
    }

    btn.addEventListener('click', () => {
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
// 8. HANDBOOK STATUS MAKER
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
    if (themeToggle && themeToggle.value === 'dark') {
      frame.classList.remove('light-spec');
      frame.classList.add('dark-spec');
    } else if (themeToggle) {
      frame.classList.remove('dark-spec');
      frame.classList.add('light-spec');
    }

    if (colorSelect && innerPoster) {
      const accent = colorSelect.value;
      innerPoster.style.borderColor = accent;
      if (posterTag) {
        posterTag.style.backgroundColor = accent;
        posterTag.style.color = (accent === '#FFCD10' || accent === '#95BF15' || accent === '#05BFCE') ? '#1A1F20' : '#FFFFFF';
      }
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
// 9. THEME, AUDIO & MOBILE NAV
// ==========================================
function initThemeAndAudioControls() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const soundToggle = document.getElementById('sound-toggle-btn');
  const mobileNavBtn = document.getElementById('mobile-nav-toggle-btn');
  const navLinks = document.querySelector('.nav-links');

  // Theme Switcher
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

  // Mobile Nav Drawer Toggle
  if (mobileNavBtn && navLinks) {
    mobileNavBtn.addEventListener('click', () => {
      sfx.playClick();
      navLinks.classList.toggle('open');
    });
  }
}

// ==========================================
// 10. BOOTSTRAP ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollEngine();
  initDraggableStickers();
  initCertificateGenerator();
  initStatusMaker();
  initProjectUpvotes();
  initPrankEngine();
  initThemeAndAudioControls();

  // Resume Web Audio on first user interaction
  window.addEventListener('click', () => sfx.init(), { once: true });
});
