import images from '../data/images-data.js';
import htmlToDOM from '../src/html-to-DOM.js';
import imgTemplate from '../src/img-template.js';

const list = document.getElementById('bottle-list');
console.log(list);
images.forEach(image => {
    console.log(image);
    const html = imgTemplate(image);
    
    const dom = htmlToDOM(html);
    console.log(dom);
    list.appendChild(dom);
});