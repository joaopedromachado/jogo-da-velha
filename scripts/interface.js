    "use strict"

    onload = function() {
        
        let keepScore = JSON.parse(localStorage.getItem("Scoreboard"));

        if (keepScore) {
            scoreboard = keepScore
        }
        document.getElementById("scoreboard-o").innerHTML = keepScore[0];

        document.getElementById("scoreboard-x").innerHTML = keepScore[1];
    }
// DOMContentLoaded serve para acelerar a transferência de dados através do usuário.
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

//Para cada quadrado na minha tela, atribuo uma função de click.
    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})

// Função na qual vai ser meu ponto de referência, que me devolve o .target do meu elemento.
function handleClick(event) {

    let element = event.target;
    let position = element.id;

    // Se a posição do meus jogadores forem true, ele retorna o vencedor da rodada.
    if (handleMove(position) == true){
        setTimeout(() => {
            alert(`O Jogador ${playerTime} venceu!!!`)
           
        }, 10);
    }

    saveScoreboard();
    updateScores(scoreboard);
    updateElements();

}

// Essa função está me retornando uma atualização para cada elemento clicado na tela.
function updateElements(position) {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

// Receberá uma div, que fará atualizar o conteúdo de acordo com o ::after configurado no CSS.
        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}

function updateScores() {
    let scoreP1 = document.getElementById("scoreboard-o");
    let scoreP2 = document.getElementById("scoreboard-x");

    scoreP1.innerHTML = scoreboard[0];
    scoreP2.innerHTML = scoreboard[1];
}

function restartGame() {
    window.location.reload()    
}

function saveScoreboard() {
    let keepScore = scoreboard
    localStorage.setItem("Scoreboard", JSON.stringify(keepScore));

    updateScores
}

function resetScore() {
   localStorage.removeItem("Scoreboard");

    if(scoreboard >= 1) {
    
        document.getElementById("scoreboard-o").innerHTML = scoreboard

        document.getElementById("scoreboard-x").innerHTML = scoreboard
}
   

}