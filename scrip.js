const resultText = document.querySelector(".result")
const resulImage = document.querySelector(".image")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")


let humanNumber = 0
let machineNumber = 0

const playHuman = (humanChoice) => {
    playThegame(humanChoice, playMachine())

}


const playMachine = () => {

    const choices = ["rock", "paper", "scissors"]
    const randonNumber = Math.floor(Math.random() * 3)
    return choices[randonNumber]

}

const playThegame = (human, machine) => {

    if (human === machine) {
        resultText.innerHTML = "Deu empate"
        resulImage.src = "./assets/emojiNervoso.png"

    } else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")) {

        humanNumber++
        humanScore.innerHTML = humanNumber
        resultText.innerHTML = "Parabéns você ganhou!"
        resulImage.src = "./assets/emojiFeliz.png"
    } else {
        machineNumber++
        machineScore.innerHTML = machineNumber
        resultText.innerHTML = "Você perdeu"
        resulImage.src = "./assets/emojiChorando.png"
    }


}
