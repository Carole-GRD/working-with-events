// ----------------------------------------------------------------------
//                            ADD SQUARE
// ---------------------------------------------------------------------- 

// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

function addSquare(colorSquare) {
    // Récupérer la div "wrapper" qui contiendra les nouveaux carrés
    let displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
    
    // Créer les nouveaux carrés et ajouter les deux classes
    let displayedSquare = document.createElement('div');
    displayedSquare.classList.add('displayedsquare', `${colorSquare}`);

    // Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
    displayedSquare.addEventListener('click', function() {
        alertPopUp(colorSquare);
    });
    
    // Ajouter les carrés à la div "wrapper"
    displayedSquareWrapper.appendChild(displayedSquare);
}
