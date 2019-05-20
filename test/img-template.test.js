import imgTemplate from '../src/img-template.js';

const test = QUnit.test;

QUnit.module('image template');

test('image template', (assert) => {
    // Arrange
    const image = {
        title: 'Title',
        url: './assets/waterbottle-one.png',
        description: 'A unicorn and a narwhal nuzzling their horns'
    };

    const expected = /*html*/`
        <li>
            <h2 class="title">Title</h2>
            <img class="bottle-image" src="./assets/waterbottle-one.png" alt="A unicorn and a narwhal nuzzling their horns">
        </li>
    `;

    // Act
    const html = imgTemplate(image);

    // Assert
    assert.htmlEqual(html, expected);
});
