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
  console.log(window.scrollY);
  window.scrollY >= 50
    ? header.classList.add('header_scroll')
    : header.classList.remove('header_scroll');
});
