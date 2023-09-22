// ----------------------------------------------------------------------
//                          KEYPRESS EVENT
// ----------------------------------------------------------------------


document.addEventListener('keypress', event => {

    if (event.key === ' ') {
        // When the spacebar is hit randomly change the background color of the whole page
        let color = randomColor();
        let randomBgColor = color.randomBackgroundColor;
        let randomtxtColor = color.randomColorText;
        document.body.style.backgroundColor = randomBgColor;

        // Log when the spacebar is used the same way you used for the generated squares.
        let time = getElapsedTime();
        newLog(time, null, randomBgColor);
        // Change color logs
        colorText(randomtxtColor);
    }
    else if (event.key === 'l') {
        // When the "l" key is pressed the log gets deleted
        deleteElement(document.querySelector('ul'));
    }
    else if (event.key === 's') {
        // When the "s" key is pressed the squares get deleted 
        deleteElement(document.querySelector('.displayedsquare-wrapper'));
    }
})

function deleteElement(elements) {
    while (elements.firstChild) {
        elements.firstChild.remove();
    }
}
