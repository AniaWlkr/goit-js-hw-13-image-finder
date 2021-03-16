import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { info } from '@pnotify/core/dist/PNotify.js';

export default function onFetchError(err) {
  info({
    text: `${err}`,
    sticker: false,
    delay: 5000
  });
}
