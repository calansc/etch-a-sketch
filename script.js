
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


//Step 3 - set up hover effect so that grid divs change color when mouse passes over them, leaving a trail through your grid. Add a new class to color or change div's background color with js.