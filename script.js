let buttonId = ["b1", "b2", "b3"];
let randomId = buttonId[Math.floor(Math.random() * buttonId.length)];
let chosenValue;
//console.log(randomId);

function determineWinnerStatusStandardMode(id) {
    if (randomId == id) {
        alert("Congratulations! You picked a winner!");
    } else {
        alert("Oh no! Looks like you picked a loser!");
    }
}

function generateButtons() {
    let inputNumber = document.getElementById('num').value;
    chosenValue = Math.floor(Math.random() * (inputNumber - 1));
    for (let i = 0; i < inputNumber; ++i) {
        let btn = document.createElement("button");
        btn.innerText = "I may just be a winning button!";
        btn.id = i;
        document.body.appendChild(btn);
        btn.addEventListener("click", determineWinnerStatusGeneratedMode);
    }
}

function determineWinnerStatusGeneratedMode() {
    console.log(chosenValue);
    if (this.id == chosenValue) {
        alert("You won!!");
    } else {
        alert("You lost!");
    }
}
