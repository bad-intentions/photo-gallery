function imgTemplate(image) {    
    return /*html*/ `
        <li>
            <h2 class="title">${image.title}</h2>
            <img class="bottle-image" src="${image.url}" alt="${image.description}">
        </li>
    `;
}

export default imgTemplate;