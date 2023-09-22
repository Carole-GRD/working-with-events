// ----------------------------------------------------------------------
//                            TEXT COLOR
// ----------------------------------------------------------------------

// Change the color of the text

function colorText(textColor) {
    let titleLogs = document.querySelector('h2');
    let allLogs = document.querySelectorAll('li');

    titleLogs.style.color = textColor;
    // Parcourir tous les éléments de allLogs et définir la couleur
    allLogs.forEach(log => 
        log.style.color = textColor
    );
}