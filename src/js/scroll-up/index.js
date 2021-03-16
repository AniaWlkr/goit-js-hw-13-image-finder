import getRefs from '../get-refs';

const refs = getRefs();

function trackScroll() { 
  const scrolledOffset = window.pageYOffset;
  const viewHeight = document.documentElement.clientHeight;

  scrolledOffset > viewHeight ? refs.scrollUpBtn.classList.add('is-visible'): refs.scrollUpBtn.classList.remove('is-visible');
}

function onScrollUp() {  
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

refs.scrollUpBtn.addEventListener('click', onScrollUp);

export default trackScroll;