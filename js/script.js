let elMaxWordFinder = document.querySelector("#maxword-finder");
let elMaxWordFinderSecond = document.querySelector("#maxword-finder-second");
let elReadyAnswer = document.querySelector("#ready-answer");

let elCheckBtn = document.querySelector(".check-btn");
let elClearBtn = document.querySelector("#clear-btn");

let warningMessage = "Hech narsa kiritmadingiz!";
let readyMessage = "";

elCheckBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

    let userInput = elMaxWordFinder.value.trim();
    let userInputSecond = elMaxWordFinderSecond.value.trim();

    if (userInput == "" && userInputSecond == "") {
        elMaxWordFinder.textContent = warningMessage;
        elMaxWordFinder.setAttribute("class", "red-color");
        elMaxWordFinderSecond.setAttribute("class", "red-color");
    }
    else {
        let firstInputLength = userInput.length;
        let secondWordLength = userInputSecond.length;
        elMaxWordFinder.setAttribute("class", "black-color");
        elMaxWordFinderSecond.setAttribute("class", "black-color");

        if (firstInputLength > secondWordLength) {
            readyMessage = `${userInput} length is bigger than length ${userInputSecond}`;
        } 
        else if (firstInputLength < secondWordLength) {
            readyMessage = `${userInputSecond} length is bigger than length ${userInput}`;
        }
        else {
            readyMessage = "Length of words are equal";
        }
    }
    let readyAnswer = document.createElement("p");
    readyAnswer.textContent = readyMessage;
    elReadyAnswer.append(readyAnswer);

})

elClearBtn.addEventListener("click", function(e) {
    e.preventDefault();

    elReadyAnswer.innerHTML = "";
})

