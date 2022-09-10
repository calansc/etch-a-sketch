
const container = document.querySelector('#container');
let side = 16;
let sideSq = side*side;
let sqWidth = (640/side).toString()+'px';
//console.log(sqWidth, typeof sqWidth);

function createSquares() {
    const squareDelete = document.getElementById('container');
    while (squareDelete.firstChild) {
        squareDelete.removeChild(squareDelete.lastChild);
    };
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
function createSquaresBlack() {
    const squareDelete = document.getElementById('container');
    while (squareDelete.firstChild) {
        squareDelete.removeChild(squareDelete.lastChild);
    };
    for (let i=0; i < sideSq; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute('class','squares');
        //square.textContent='test'+i;
        square.setAttribute('id',i);
        square.style.width = sqWidth;
        square.style.height = sqWidth;
        square.addEventListener('mouseenter', () => {
            let objRgba = (document.getElementById(square.id).style.background);
            //console.log(objRgba);
            let objElements = objRgba.split(',');
            if (objElements.length !== 4) {
                let color = 'rgba(0,0,0,0.1)';
                square.style.background = color;
            } else if ( objElements.length == 4) {
                let alpha = objElements[3]
                let alpha2 = alpha.trim();
                let alpha3 = alpha2.slice(0,3);
                let a = parseFloat(alpha3) + .1;
                //console.log(a + 'test');
                let color = 'rgba(0,0,0,' + a + ')';
                square.style.background = color;
            } else {
            let color = 'rgba(0,0,0,0.1)';
            square.style.background = color;
            }
        })
    }
};


function randomRGBA() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};
let a = 0.1;

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
    
    createSquares();
}

createSquares()
const squares = document.getElementsByClassName('squares');
//console.log(squares.length, typeof squares);
