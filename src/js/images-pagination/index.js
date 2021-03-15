import imagesApi from '../api/apiService';
import imagesListTmpl from '../../templates/imageCard.hbs';

const refs = { 
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

class imagesPagination { 
  constructor() {
    this.currentPage = 1;
    this.queryStr = '';
    this.scrollMarker = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  
  renderImages({ hits }) { 
    if (hits.length === 0) throw 'Nothing was found. Please try another search';
    
    const imagesMarkUp = imagesListTmpl(hits);
    refs.gallery.insertAdjacentHTML('beforeend', imagesMarkUp) ;
    refs.loadMoreBtn.classList.add('is-visible');
  }
  
  fetchImages() { 
    return imagesApi(this.currentPage, this.queryStr)
    .then(this.renderImages)
    .catch(err => console.log(err));
  }
  
  loadMore() { 
    this.currentPage += 1;
    this.scrollMarker = refs.gallery.lastElementChild;
    
    this.fetchImages()
      .then(() =>
    this.scrollMarker.scrollIntoView({behavior: "smooth" }));
  }

  onFormSubmit(event) { 
    event.preventDefault();
    this.currentPage = 1;
    refs.gallery.innerHTML = '';

    this.queryStr = refs.form.query.value.trim();
    if (!this.queryStr) return;

    this.fetchImages();
  }
}

export default imagesPagination;

