// ----------------------------------------------------------------------
//                            ALERT POPUP
// ---------------------------------------------------------------------- 


function alertPopUp(color) {
    console.log('test', color);

    // Créer la popup
    let popUp = document.createElement('div');
    let message = document.createElement('p');
    let messageContent = document.createTextNode(`${color}`);
    message.appendChild(messageContent);

    // Ajouter le message à la popup
    popUp.appendChild(message);
    popUp.className = 'popup';

    // Créer un bouton pour pouvoir suppimer la popup
    let button = document.createElement('button');
    let buttonContent = document.createTextNode('OK');
    button.appendChild(buttonContent);
    button.addEventListener('click', deletePopup);


    // Ajouter le bouton à la popup
    popUp.appendChild(button);

    // Ajouter la popup 
    let main = document.querySelector('main');
    let mainFirstChild = main.children[0];
    main.insertBefore(popUp, mainFirstChild);

}