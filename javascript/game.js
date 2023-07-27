document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('urlForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let playerInput = "";
        while (playerInput === ""){
            playerInput = document.getElementById('playerInput').value.toLowerCase();
        }
        let choice = ['pierre', 'feuille', 'ciseaux', 'bombe'];
        const divPlayer = document.querySelector('#playerAnswer');
        const divComputer = document.querySelector('#computerAnswer');
        const divWinner = document.querySelector('#winnerAnswer');
        let para = document.createElement('p');
        if (choice.includes(playerInput)) {
            para.textContent = playerInput;
            divPlayer.appendChild(para);
            console.log("Le joueur à choisie :",playerInput);
        }
        else
            alert('Saisie pas bonne Garry');
        document.getElementById("urlForm").reset();
        //choix ordi
        function getComputerChoice() {
            let choice = ['pierre', 'feuille', 'ciseaux'];
            let hasard = Math.round(Math.random() * 2);
            console.log("L'ordinateur à choisie :",choice[hasard]);
            return choice[hasard];
        }
        function findWinner(playerChoice, compChoice) {
            let choice = ['pierre', 'feuille', 'ciseaux', 'bombe'];
            if (playerChoice === compChoice){
                return "Tied";
            }
            else if (
                (choice.includes(playerChoice) && choice.includes(compChoice)) ||
                (choice.includes(playerChoice) && choice.includes(compChoice)) ||
                (choice.includes(playerChoice) && choice.includes(compChoice)) ||
                (choice.includes(playerChoice))
            ) {
                return "Won";
            }
            else
                return "Lost";
        }
        function playGame() {
            const computerChoice =getComputerChoice();
            para.textContent = computerChoice;
            divComputer.appendChild(para);
            const result = findWinner(playerInput, computerChoice);
            para.textContent = result;
            divWinner.appendChild(para);
            console.log(result);
        }
        playGame();
    });
});

// function getPlayerChoice() {
//     let playerInput = "";
//     while (playerInput === ""){
//         playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase();
//     }
//     console.log(playerInput);
//     let choice = ['rock', 'paper', 'scissors', 'bomb'];
//     if (choice.includes(playerInput)) {
//         console.log("Le joueur à choisie :",playerInput);
//     }
//     else
//         console.log("Saisie pas bonne Garry");
//     return playerInput;
// }
// function getComputerChoice() {
//     let choice = ['rock', 'paper', 'scissors'];
//     let hasard = Math.round(Math.random() * 2);
//     console.log("L'ordinateur' à choisie :",choice[hasard]);
//     return choice[hasard];
// }
// function findWinner(playerChoice, compChoice) {
//     let choice = ['rock', 'paper', 'scissors', 'bomb'];
//     if (playerChoice === compChoice){
//         return "Tied";
//     }
//     else if (
//         (choice.includes(playerChoice) && choice.includes(compChoice)) ||
//         (choice.includes(playerChoice) && choice.includes(compChoice)) ||
//         (choice.includes(playerChoice) && choice.includes(compChoice)) ||
//         (choice.includes(playerChoice))
//     ) {
//         return "Won";
//     }
//     else
//         return "Lost";
// }
// function playGame() {
//     const uChoice = getPlayerChoice();
//     const computerChoice =getComputerChoice();
//     const result = findWinner(uChoice, computerChoice);
//     console.log(result);
// }
// playGame();