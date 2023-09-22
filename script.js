const _initTime = Date.now();

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}


const clickOnSquare = (e) => {
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());

    let color = e.target.classList[1];
    let time = getElapsedTime();

    newLog(time, color, null);
}

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
}

// ----------------------------------------------------------------------




// ----------------------------------------------------------------------
//                            CARRES
// ----------------------------------------------------------------------

// Récupérer la div "wrapper" qui contiendra les nouveaux carrés
let displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');

// Créer les nouveaux carrés et ajouter les deux classes
let displayedSquareGreen = document.createElement('div');
displayedSquareGreen.classList.add('displayedsquare', 'green');
let displayedSquareViolet = document.createElement('div');
displayedSquareViolet.classList.add('displayedsquare', 'violet');
let displayedSquareOrange = document.createElement('div');
displayedSquareOrange.classList.add('displayedsquare', 'orange');

// Ajouter les carrés à la div "wrapper"
displayedSquareWrapper.appendChild(displayedSquareGreen);
displayedSquareWrapper.appendChild(displayedSquareViolet);
displayedSquareWrapper.appendChild(displayedSquareOrange);


// ----------------------------------------------------------------------
//                            LOGS
// ----------------------------------------------------------------------
// Create a new <li> in the log below to state when the action was done

function newLog(timeAction, colorSquare, backgroundColor) {

    // Récupérer l'élément "ul" qui contiendra tous les logs
    let logList = document.querySelector('ul');

    // Créer un nouveau log
    let newLog = document.createElement('li');
    let newLogContent;
    if (timeAction && colorSquare) {
        newLogContent = document.createTextNode(`[${timeAction}] Created a new ${colorSquare} square`);
    }
    else if (timeAction && backgroundColor) {
        newLogContent = document.createTextNode(`[${timeAction}] Change backgroundColor to ${backgroundColor}`);
    } 
    newLog.appendChild(newLogContent);

    // Ajouter le log à la liste
    logList.appendChild(newLog);

} 



// ----------------------------------------------------------------------
//                            BACKGROUND + LOG
// ----------------------------------------------------------------------

document.addEventListener('keypress', event => {
    
    // if (event.code === 'Space') {
    if (event.key === ' ') {
        console.log(event);
        console.log(event.code);

        // When the spacebar is hit randomly change the background color of the whole page
        let red = Math.ceil(Math.random() * 255);
        let green = Math.ceil(Math.random() * 255);
        let blue = Math.ceil(Math.random() * 255);
        let color = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = color;

        // Log when the spacebar is used the same way you used for the generated squares.
        let time = getElapsedTime();
        newLog(time, null, color);
    }
})