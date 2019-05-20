function imgTemplate(images) {
    return /*html*/ `
        <li>
            <h2 class="title">${images.title}</h2>
            <img class="bottle-image" src="${images.url}" alt="waterbottle one">
        </li>
    `;
}

export default imgTemplate;