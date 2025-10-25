// small interactive helpers: mobile menu + form submit
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // in production you'd send the form to server or use mailto / third-party service
      alert('Дякую! Повідомлення відправлено (симуляція).\nПошта: mezha2005@gmail.com');
      form.reset();
    });
  }
});
// Лайтбокс для збільшення фото
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.querySelector('.lightbox .close');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  close.addEventListener('click', () => lightbox.style.display = 'none');
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
});
