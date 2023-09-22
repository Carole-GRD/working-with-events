// ----------------------------------------------------------------------
//                            LOGS
// ----------------------------------------------------------------------

// Create a new <li> in the log below to state when the action was done
// Log when the spacebar is used the same way you used for the generated squares.

function newLog(timeAction, colorSquare, backgroundColor) {

    // Récupérer l'élément "ul" qui contiendra tous les logs
    let logList = document.querySelector('ul');

    // Créer un nouveau log
    let newLog = document.createElement('li');
    let newLogContent;
    if (timeAction && colorSquare) {
        // Log for register creation square
        newLogContent = document.createTextNode(`[${timeAction}] Created a new ${colorSquare} square`);
    }
    else if (timeAction && backgroundColor) {
        // Log for register new backgroundColor
        newLogContent = document.createTextNode(`[${timeAction}] Change backgroundColor to ${backgroundColor}`);
    } 
    newLog.appendChild(newLogContent);

    // Ajouter le log à la liste
    logList.appendChild(newLog);

    // Change la couleur du texte en fonction de la couleur du background
    // en allant rechercher la couleur du titre h2
    let titleLogs = document.querySelector('h2');
    let colorTxt = titleLogs.style.color;
    colorText(colorTxt);
} 
