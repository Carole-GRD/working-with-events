const _initTime = Date.now();

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}


const clickOnSquare = (e) => {
    // console.log(e.target.classList[1]);
    // console.log(getElapsedTime());

    let color = e.target.classList[1];
    let time = getElapsedTime();

    // Créer un nouveau log
    newLog(time, color);

    // Créer un nouveau carré
    addSquare(color);

}

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
}












