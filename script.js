
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
            square.style.background = 'gray';
        })
    }
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



//Step 4 - let user adjust squares per side. 
//Created button to edit with default 16.
//How to recreate table
//How to change square div size