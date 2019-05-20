import templateHeader from '../src/template-header.js';

const test = QUnit.test;
QUnit.module('header template');

test('header template', (assert) => {
    // Arrange
    const header = 'Photo Gallery';

    const expected = /*html*/ `
    <header>
        <h1>Photo Gallery</h1>
    </header>
`;

    // Act
    const html = templateHeader(header);

    // Assert
    assert.htmlEqual(html, expected);
});
