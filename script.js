

let container = document.getElementById("GridContainer");
let startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.className = 'startbutton';
startButton.addEventListener('click', startClicked);
document.body.appendChild(startButton);

function makeGrid(sides){
    for(let i = 0; i < (sides*sides); i++){
        let newDiv = document.createElement('Div');
        newDiv.className = 'gridsquare';
        newDiv.style.height = (Math.floor((408 / sides)) -3) + 'px';
        newDiv.style.width = (Math.floor((408 / sides)) -3) + 'px';
        newDiv.addEventListener('mouseenter', squareHover);
        container.appendChild(newDiv);
    }
}

function startClicked(e) {
    const btn = e.target;
    let sides = prompt('How many squares per side?');
    if (sides > 100)
        sides = 100;
    
        container.innerHTML = "";
    makeGrid(sides);
}
function squareHover(e) {
    const sqr = e.target;
    console.log(sqr);
    sqr.style.backgroundColor = 'Black';
}

console.log(container);