/* ============================
   PORTFOLIO JS
============================ */

// ---- Custom Cursor ----
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ---- Scroll Progress ----
const scrollBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = progress + '%';
});

// ---- Mini Nav show/hide ----
const miniNav = document.getElementById('miniNav');
const navDots = document.querySelectorAll('.mini-nav-dot');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    miniNav.classList.add('visible');
  } else {
    miniNav.classList.remove('visible');
  }
  updateActiveNav();
  updateScrollProgress();
});

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navDots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('href') === '#' + current) {
      dot.classList.add('active');
    }
  });
}

function updateScrollProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = progress + '%';
}

// ---- Fade-in on scroll ----
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

fadeEls.forEach(el => observer.observe(el));

// ---- Parallax on border doodles ----
const borderLeft = document.getElementById('borderLeft');
const borderRight = document.getElementById('borderRight');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const offset = scrollY * 0.06;
  if (borderLeft) borderLeft.style.transform = `translateY(${offset}px)`;
  if (borderRight) borderRight.style.transform = `translateY(${-offset * 0.7}px)`;
});

// ---- Live Clock ----
function updateTime() {
  const timeEl = document.getElementById('localTime');
  if (!timeEl) return;

  const now = new Date();
  // Simulate SF time (UTC-8)
  const sfTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  const hours = sfTime.getHours();
  const minutes = sfTime.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;

  timeEl.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
    ${displayHours}:${minutes} ${ampm} PT
  `;
}

updateTime();
setInterval(updateTime, 60000);

// ---- Smooth scroll for nav links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Stagger collage cards on hover ----
const collageCards = document.querySelectorAll('.collage-card');

collageCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    collageCards.forEach(other => {
      if (other !== card) {
        other.style.filter = 'brightness(0.65)';
        other.style.transition = 'filter 0.3s ease';
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    collageCards.forEach(other => {
      other.style.filter = 'brightness(1)';
    });
  });
});

// ---- Work card click ripple effect ----
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      background-color: rgba(204,34,0,0.2);
      width: 60px;
      height: 60px;
      left: ${e.offsetX - 30}px;
      top: ${e.offsetY - 30}px;
      pointer-events: none;
    `;
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(ripple);

    const style = document.createElement('style');
    style.textContent = `@keyframes ripple { to { transform: scale(6); opacity: 0; } }`;
    document.head.appendChild(style);

    setTimeout(() => ripple.remove(), 600);
  });
});

// ---- Form submit animation ----
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const originalText = sendBtn.textContent;
    sendBtn.textContent = 'Sending...';
    sendBtn.style.opacity = '0.75';
    sendBtn.disabled = true;

    setTimeout(() => {
      sendBtn.textContent = '✓ Sent!';
      sendBtn.style.opacity = '1';
      sendBtn.style.background = '#2a7a4f';
    }, 1200);

    setTimeout(() => {
      sendBtn.textContent = originalText;
      sendBtn.style.background = '';
      sendBtn.disabled = false;
    }, 3000);
  });
}

// ---- Animated doodle scribble on load ----
document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('.doodle-svg path');
  paths.forEach((path, i) => {
    const length = path.getTotalLength ? path.getTotalLength() : 200;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.04}s`;
    setTimeout(() => {
      path.style.strokeDashoffset = '0';
    }, 100);
  });
});

// ---- Cursor style override on interactive elements ----
document.querySelectorAll('a, button, .work-card, .collage-card, .sticker').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.4)';
    cursor.style.borderColor = 'rgba(204,34,0,0.6)';
    cursor.style.background = 'rgba(204,34,0,0.08)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.borderColor = 'var(--red)';
    cursor.style.background = 'transparent';
  });
});

// ---- Input focus special cursor ----
document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('focus', () => {
    cursor.style.transform = 'translate(-50%,-50%) scaleX(0.3) scaleY(1.6)';
    cursor.style.borderRadius = '2px';
  });
  el.addEventListener('blur', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.borderRadius = '50%';
  });
});
