import imgTemplate from '../src/img-template.js';

const test = QUnit.test;

QUnit.module('image template');

test('image template', (assert) => {
    // Arrange
    const image = {
        title: 'Title',
        url: './assets/waterbottle-one.png'
    };

    const expected = /*html*/`
        <li>
            <h2 class="title">Title</h2>
            <img class="bottle-image" src="./assets/waterbottle-one.png" alt="waterbottle one">
        </li>
    `;

    // Act
    const html = imgTemplate(image);

    // Assert
    assert.htmlEqual(html, expected);
});