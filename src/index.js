import './styles.css';
import { throttle } from "lodash";
import getRefs from './js/get-refs';
import imagesPagination from './js/images-pagination';
import trackScroll from './js/scroll-up';
import './js/modal-img';

const refs = getRefs();
const images = new imagesPagination();

refs.form.addEventListener('submit', images.onFormSubmit);
refs.loadMoreBtn.addEventListener('click', images.loadMore);
window.addEventListener('scroll', throttle(trackScroll, 300));