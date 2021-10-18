

document.addEventListener("DOMContentLoaded", () => {

    squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})

function handleClick(event) {

    let element = event.target;
    let position = element.id;

    if (handleMove(position) == true){
        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + playerTime)
        }, 10);
    }

    updateElements();

}

function updateElements() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}