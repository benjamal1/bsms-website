// Mobile nav toggle + image lightbox
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('nav.main button.toggle');
  const menu = document.querySelector('nav.main ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Lightbox
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = '<img alt="Full-size image">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  lb.addEventListener('click', () => lb.classList.remove('open'));
  document.querySelectorAll('img[data-zoom]').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });
});
