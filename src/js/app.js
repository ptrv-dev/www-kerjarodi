const images = Array.from(
  document.querySelector('.testimonials__image').childNodes
).filter((node) => node.nodeName === 'PICTURE');
const names = Array.from(
  document.querySelector('.testimonials__name').childNodes
).filter((node) => node.nodeName === 'H3');
const positions = Array.from(
  document.querySelector('.testimonials__position').childNodes
).filter((node) => node.nodeName === 'P');
const texts = Array.from(
  document.querySelector('.testimonials__text').childNodes
).filter((node) => node.nodeName === 'P');

const navigation = {
  prev: document.querySelector('.testimonials__button_prev'),
  next: document.querySelector('.testimonials__button_next'),
};

let currentSlide = 1;
const slidesCount = images.length;

const handlePrevious = () => {
  currentSlide <= 1 ? (currentSlide = slidesCount) : currentSlide--;
  handleSlideChange();
};

const handleNext = () => {
  currentSlide >= slidesCount ? (currentSlide = 1) : currentSlide++;
  handleSlideChange();
};

const handleSlideChange = () => {
  [images, names, positions, texts].forEach((nodeArray) =>
    nodeArray.forEach((node, idx) => {
      idx === currentSlide - 1
        ? (node.dataset.active = true)
        : (node.dataset.active = false);
    })
  );
};

handleSlideChange();

navigation.prev.addEventListener('click', handlePrevious);
navigation.next.addEventListener('click', handleNext);

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  window.scrollY >= 50
    ? header.classList.add('header_scroll')
    : header.classList.remove('header_scroll');
});

// animate

function observerCallBack(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_animate_active');
    } else {
      // entry.target.classList.remove('active');
    }
  });
}

const targets = document.querySelectorAll('._animate');
const observer = new IntersectionObserver(observerCallBack);

targets.forEach((target) => observer.observe(target));

// adaptive

const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenuClose = document.querySelector('.header__menu-close');
const headerMenu = document.querySelector('.header__menu');

headerMenuButton.addEventListener('click', () => {
  headerMenu.classList.add('header__menu_active');
});
headerMenuClose.addEventListener('click', () => {
  headerMenu.classList.remove('header__menu_active');
});

const testimonials = {
  imagesWrapper: document.querySelector('.testimonials__image'),
  title: document.querySelector('.testimonials__title'),
  container: document.querySelector('.testimonials__container'),
  col: document.querySelector('.testimonials__col'),
};

const footer = {
  subscribeBtn: document.querySelector('.footer__button'),
};

const handleResize = () => {
  const width = window.innerWidth;
  console.log(width);
  if (width < 768) {
    testimonials.col.prepend(testimonials.imagesWrapper);
    testimonials.container.prepend(testimonials.title);
  } else {
    testimonials.container.prepend(testimonials.imagesWrapper);
    testimonials.col.prepend(testimonials.title);
  }

  if (width < 600) {
    footer.subscribeBtn.innerHTML = 'Subscribe';
  } else {
    footer.subscribeBtn.innerHTML = 'Subscribe now';
  }
};
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
