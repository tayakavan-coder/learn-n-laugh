// PAGE LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('hidden');
    setTimeout(() => document.getElementById('pageLoader').style.display = 'none', 500);
  }, 1200);
});

// CUSTOM CURSOR
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .activity-card, .teacher-card, .gallery-item, .why-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.style.transform = 'translate(-50%,-50%) scale(1.8)';
    dot.style.background = 'var(--blue)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
    ring.style.borderColor = 'var(--pink)';
  });
  el.addEventListener('mouseleave', () => {
    dot.style.transform = 'translate(-50%,-50%) scale(1)';
    dot.style.background = 'var(--pink)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.borderColor = 'var(--blue)';
  });
});

// NAV SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  const st = document.getElementById('scrollTop');
  if (window.scrollY > 400) st.classList.add('visible');
  else st.classList.remove('visible');
});

// MOBILE MENU
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  const spans = ham.querySelectorAll('span');
  if (menu.classList.contains('open')) {
    spans[0].style.transform = 'translateY(8px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  const spans = document.getElementById('hamburger').querySelectorAll('span');
  spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

// REVEAL ON SCROLL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// COUNTER ANIMATION
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 25);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('[data-target]').forEach(el => {
        const t = parseInt(el.getAttribute('data-target'));
        const suffix = el.closest('.hero-stat').querySelector('.stat-label').textContent.includes('%') ? '+' : '+';
        animateCounter(el, t, '+');
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const firstStat = document.querySelector('.hero-stats');
if (firstStat) statsObserver.observe(firstStat);

// FAQ TOGGLE
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// LIGHTBOX
function openLightbox(emoji, title, desc) {
  document.getElementById('lbEmoji').textContent = emoji;
  document.getElementById('lbTitle').textContent = title;
  document.getElementById('lbDesc').textContent = desc;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || e.target.classList.contains('lb-close')) {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ADD EVENT
function addEvent() {
  const title = document.getElementById('evTitle').value.trim();
  const date = document.getElementById('evDate').value;
  const desc = document.getElementById('evDesc').value.trim();
  const cat = document.getElementById('evCat').value;
  const fb = document.getElementById('evFeedback');

  if (!title || !date || !desc) {
    fb.textContent = '⚠️ Please fill all fields!';
    fb.style.color = 'var(--pink)';
    return;
  }

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();

  const catMap = {
    annual: { label: '🎭 Annual Event', color: 'var(--pink)', dateBg: 'linear-gradient(135deg,var(--pink-light),var(--pink))', tagBg: 'rgba(255,107,157,0.08)', tagCol: 'var(--pink-dark)' },
    sports: { label: '🏅 Sports Event', color: 'var(--blue-sky)', dateBg: 'linear-gradient(135deg,var(--blue-light),var(--blue-sky))', tagBg: 'rgba(116,185,255,0.08)', tagCol: 'var(--blue-sky-dark)' },
    art: { label: '🎨 Art & Culture', color: 'var(--purple)', dateBg: 'linear-gradient(135deg,rgba(162,155,254,0.4),rgba(162,155,254,0.8))', tagBg: 'rgba(162,155,254,0.08)', tagCol: '#6C5CE7' },
    academic: { label: '📚 Academic', color: 'var(--green)', dateBg: 'linear-gradient(135deg,var(--green-light),var(--green))', tagBg: 'rgba(107,203,119,0.08)', tagCol: 'var(--green-dark)' },
    celebration: { label: '🎉 Celebration', color: 'var(--yellow)', dateBg: 'linear-gradient(135deg,#FFE8A0,#FFD93D)', tagBg: 'rgba(255,217,61,0.1)', tagCol: '#996600' }
  };

  const c = catMap[cat] || catMap.annual;

  const html = `
    <div class="event-item" style="--line-color:${c.color}">
      <div class="event-date-box" style="background:${c.dateBg}">
        <span class="day">${day}</span>
        <span class="month">${month}</span>
      </div>
      <div class="event-info">
        <h4>✨ ${title}</h4>
        <p>${desc}</p>
        <span class="etag" style="background:${c.tagBg};color:${c.tagCol}">${c.label}</span>
      </div>
    </div>
  `;

  const list = document.getElementById('eventsList');
  const div = document.createElement('div');
  div.innerHTML = html;
  const item = div.firstElementChild;
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  list.prepend(item);
  setTimeout(() => {
    item.style.transition = 'all 0.4s ease';
    item.style.opacity = '1';
    item.style.transform = 'translateX(0)';
  }, 50);

  document.getElementById('evTitle').value = '';
  document.getElementById('evDate').value = '';
  document.getElementById('evDesc').value = '';
  fb.textContent = '✅ Event added successfully!';
  fb.style.color = 'var(--green-dark)';
  setTimeout(() => fb.textContent = '', 3000);
}

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
const contactFormInner = document.getElementById('contactFormInner');
const contactFormError = document.getElementById('formError');
const contactFormSuccess = document.getElementById('formSuccess');

function showContactError(message) {
  if (!contactFormError) return;
  contactFormError.textContent = message;
  contactFormError.style.display = message ? 'block' : 'none';
}

async function submitForm(event) {
  event.preventDefault();
  showContactError('');

  const formData = {
    parentName: document.getElementById('parentName').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    childName: document.getElementById('childName').value.trim(),
    childAge: document.getElementById('childAge').value,
    session: document.getElementById('session').value,
    message: document.getElementById('message').value.trim(),
  };

  if (!formData.parentName || !formData.phone || !formData.email) {
    showContactError('Please complete your name, phone, and email.');
    return;
  }

  try {
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      showContactError(result.error || 'Unable to send enquiry. Please try again later.');
      return;
    }

    contactForm.reset();
    contactFormInner.style.display = 'none';
    contactFormSuccess.style.display = 'block';
  } catch (error) {
    showContactError('Server error. Please try again later.');
  }
}

if (contactForm) contactForm.addEventListener('submit', submitForm);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = document.querySelector('nav').offsetHeight;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// 3D CARD TILT
document.querySelectorAll('.activity-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / cy * 6;
    const ry = (x - cx) / cx * 6;
    card.style.transform = `perspective(800px) rotateX(${-rx}deg) rotateY(${ry}deg) translateY(-12px) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// PARALLAX FLOATING ELEMENTS
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.float-el').forEach((el, i) => {
    const speed = 0.08 + (i % 4) * 0.03;
    el.style.transform = `translateY(${y * speed}px)`;
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const sTop = section.offsetTop;
    const sHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (link) {
      if (scrollY >= sTop && scrollY < sTop + sHeight) {
        link.style.color = 'var(--pink-dark)';
        link.style.background = 'rgba(255,107,157,0.07)';
        link.style.borderRadius = '12px';
      } else {
        link.style.color = '';
        link.style.background = '';
      }
    }
  });
});
