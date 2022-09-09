
const container = document.querySelector('#container');
let side = 16;
let sideSq = side*side;
let sqWidth = (640/side).toString()+'px';
//console.log(sqWidth, typeof sqWidth);

function createSquares() {
    for (let i=0; i < sideSq; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute('class','squares');
        //square.textContent='test'+i;
        square.setAttribute('id',i);
        square.style.width = sqWidth;
        square.style.height = sqWidth;
        square.addEventListener('mouseenter', () => {
            square.style.background = randomRGBA();
        })
    }
};

function randomRGBA() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    //console.log(o(r()*s));
};

function sideLengthButton() {
    let sideLength = prompt('Enter Desired Side Length (1-100)', 16);
    if (typeof sideLength !== 'string' ||sideLength > 100 || sideLength < 1 || 
    sideLength - 1 !== sideLength -1) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    side = sideLength;
    sideSq = side*side;
    sqWidth = (640/side).toString()+'px';
    //console.log(side);
    const squareDelete = document.getElementById('container');
    while (squareDelete.firstChild) {
        squareDelete.removeChild(squareDelete.lastChild);
    }
    createSquares();
}

createSquares()
const squares = document.getElementsByClassName('squares');
//console.log(squares.length, typeof squares);


// Extra Credit: have each pass through of the mouse change the square
// color to random RGB value. Then try having each pass add another 10%
// of black so only after 10 passes is it completely black.