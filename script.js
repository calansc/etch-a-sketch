
const container = document.querySelector('#container');

function createSquares() {
    for (let i=0; i <256; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute('class','squares');
        square.textContent='test'+i;
    }
};
createSquares()
const squares = document.getElementsByClassName('squares');
console.log(squares.length, typeof squares);
