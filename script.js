
const container = document.querySelector('#container');
let side = 16;
let sideSq = side*side;

function createSquares() {
    for (let i=0; i < sideSq; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute('class','squares');
        square.textContent='test'+i;
        square.setAttribute('id',i);
        square.style.width = '40px';
        square.style.height = '40px';
        square.addEventListener('mouseenter', () => {
            square.style.background = 'gray';
        })
    }
};

function sideLengthButton() {
    let side = prompt('Enter Desired Side Length (Max 100)', 16);
    console.log(side);
    //return(side);
}

createSquares()
const squares = document.getElementsByClassName('squares');
console.log(squares.length, typeof squares);



//Step 4 - let user adjust squares per side. 
//Created button to edit with default 16.
//How to recreate table
//How to change square div size