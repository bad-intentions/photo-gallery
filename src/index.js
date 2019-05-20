import images from '../data/images-data.js';
import htmlToDOM from '../src/html-to-DOM.js';
import imgTemplate from '../src/img-template.js';
import templateHeader from '../src/template-header.js';

const list = document.getElementById('bottle-list');
const header = document.getElementById('page-header');

images.forEach(image => {
    const html = imgTemplate(image);
    
    const dom = htmlToDOM(html);

    list.appendChild(dom);
});

const html = templateHeader();
const dom = htmlToDOM(html);
header.appendChild(dom);