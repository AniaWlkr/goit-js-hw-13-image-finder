import './styles.css';
import { throttle } from "lodash";
import imagesPagination from './js/images-pagination';

const images = new imagesPagination();

const refs = { 
  form: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  scrollUpBtn: document.querySelector('.scroll-up'),
};

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

refs.form.addEventListener('submit', images.onFormSubmit);
refs.loadMoreBtn.addEventListener('click', images.loadMore);
window.addEventListener('scroll', throttle(trackScroll, 300));
refs.scrollUpBtn.addEventListener('click', onScrollUp);