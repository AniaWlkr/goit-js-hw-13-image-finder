import getRefs from '../get-refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = getRefs();

function largeImgOpen(event) { 
  const largeImgUrl = event.target.dataset.largeImg;
  
  if (!largeImgUrl) return;

  const instance = basicLightbox.create(`
    <img src="${largeImgUrl}" width="800" height="600">
`);

  instance.show()
}

refs.gallery.addEventListener('click', largeImgOpen);