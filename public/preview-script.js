const PROGRAMS = ['Gambling Recovery', 'Drug & Alcohol Recovery'];
let selectedProgram = 0;
const CALENDLY = 'https://calendly.com/zacsarfati1/30min';

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('s-' + id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

function startApply(idx) {
  selectedProgram = idx;
  selectProg(idx);
  show('apply');
}

function selectProg(idx) {
  selectedProgram = idx;
  [0, 1].forEach(i => {
    const b = document.getElementById('prog-' + i);
    if (b) b.classList.toggle('selected', i === idx);
  });
}

function submitApply() {
  let valid = true;
  const name  = document.getElementById('f-name');
  const email = document.getElementById('f-email');
  const phone = document.getElementById('f-phone');

  [name, email, phone].forEach(f => f.classList.remove('error'));
  ['name', 'email', 'phone'].forEach(id => document.getElementById('e-' + id).classList.remove('show'));

  if (!name.value.trim()) {
    name.classList.add('error');
    document.getElementById('e-name').classList.add('show');
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('error');
    document.getElementById('e-email').classList.add('show');
    valid = false;
  }
  if (!phone.value.trim()) {
    phone.classList.add('error');
    document.getElementById('e-phone').classList.add('show');
    valid = false;
  }
  if (!valid) return;

  const url = CALENDLY + '?name=' + encodeURIComponent(name.value) + '&email=' + encodeURIComponent(email.value);
  document.getElementById('calendly-link').href = url;
  document.getElementById('conf-name').textContent = "You're booked" + (name.value ? ', ' + name.value : '') + '.';
  show('book');
}

function toggleFaq(idx) {
  const q = document.getElementById('faq-q-' + idx);
  const a = document.getElementById('faq-a-' + idx);
  const isOpen = a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(el => el.classList.remove('open'));
  if (!isOpen) { a.classList.add('open'); q.classList.add('open'); }
}

selectProg(0);
