// ----------------------------------------------------------------------
//                            RANDOM COLOR
// ----------------------------------------------------------------------

function randomColor() {
    // Generate random values for red, green, and blue components
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    // Calculate the HSP (Highly Sensitive Poo) equation
    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Determine the text color (black or white) based on HSP value
    let randomColorText = '';
    if (hsp > 127.5) {
        randomColorText = 'rgb(0, 0, 0)';
    } 
    else {
        randomColorText = 'rgb(255, 255, 255)';
    }
    
    // Return an object with the random background color and text color
    return {
        randomBackgroundColor : `rgb(${r}, ${g}, ${b})`,
        randomColorText
    }
}