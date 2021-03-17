import imagesApi from '../api/apiService';
import imagesListTmpl from '../../templates/imageCard.hbs';
import onFetchError from '../pnotify';
import getRefs from '../get-refs';
import * as basicLightbox from 'basiclightbox';

const refs = getRefs();

class imagesPagination { 
  constructor() {
    this.currentPage = 1;
    this.queryStr = '';
    // this.scrollMarker = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  
  onFormSubmit(event) { 
    event.preventDefault();
    this.currentPage = 1; 
    refs.gallery.innerHTML = '';

    this.queryStr = refs.form.query.value.trim();
    if (!this.queryStr) return;

    this.fetchImages();
  }
   
  fetchImages() { 
    return imagesApi(this.currentPage, this.queryStr)
    .then(this.renderImages)
    .catch(err => onFetchError(err));
  }

  renderImages({ hits }) { 
    if (hits.length === 0) {
      refs.loadMoreBtn.classList.remove('is-visible');
      throw 'Nothing was found. Please try another search';
    }
    
    const imagesMarkUp = imagesListTmpl(hits);
    refs.gallery.insertAdjacentHTML('beforeend', imagesMarkUp);
    refs.loadMoreBtn.classList.add('is-visible');
  }
  
  loadMore() { 
    this.currentPage += 1;
    // this.scrollMarker = refs.gallery.lastElementChild;
   
    this.fetchImages()
      .then(() => this.scrollToNewElements()
    // this.scrollMarker.scrollIntoView({behavior: "smooth"})
    );
  }

  scrollToNewElements() {
    const headerHeight = document.querySelector('.pixabay-link').clientHeight + document.querySelector('#search-form').clientHeight;
    const totalScrollHeight = refs.gallery.clientHeight - headerHeight - 40;
 
    setTimeout(() => {
      window.scrollTo({
        top: totalScrollHeight,
        behavior: 'smooth',
      });
    }, 500);
}
}

export default imagesPagination;