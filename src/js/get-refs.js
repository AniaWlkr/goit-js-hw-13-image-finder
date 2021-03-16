export default function getRefs() {
  return {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
    scrollUpBtn: document.querySelector('.scroll-up'),
  };
}