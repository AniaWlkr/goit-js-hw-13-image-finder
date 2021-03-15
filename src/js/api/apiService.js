import settings from '../settings/index.js';
const { BASE_URL, API_KEY, IMG_PER_PAGE } = settings;

async function fetchImages(page, query) {
  const pageUrl = `${BASE_URL}${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${IMG_PER_PAGE}`;
  const resolve = await fetch(pageUrl);
  if (!resolve.ok) { 
    throw resolve;
  }
  return await resolve.json();
}

export default fetchImages;
