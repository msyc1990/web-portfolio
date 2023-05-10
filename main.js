const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset - 110;

    menu.classList.remove('active');
    menuIcon.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);