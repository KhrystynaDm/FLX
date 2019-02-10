let doYouPlay = confirm("Do you want to play a game?"),
    turns = 3,
    x = Math.floor(Math.random() * 6),
    minNumber = 0,
    maxNumber = 5,
    totalPrize = 0,
    maxPossiblePrize = 10;

if (doYouPlay === false) {
    alert('You did not become a millionaire, but can.');
}
else {
    while (turns > 0) {
        let guessNum = prompt(
            "Enter a number from " + minNumber + " to " + maxNumber + "\n" +
            "Attemts left: " + turns + "\n" +
            "Total prize: " + totalPrize + "$\n" +
            "Possible prize in current attempt: " + maxPossiblePrize + "$");
        if (parseInt(guessNum) === x) {
            totalPrize += maxPossiblePrize;
            alert("Congratulation! Your prize is:" + totalPrize + " $");
            doYouPlay = confirm("Do you want to continue?");
            if (doYouPlay === false) {
                alert('Thank you for a game. Your prize is: ' + totalPrize + "$");
                break;
            }
            else {
                turns = 3,
                    x = Math.floor(Math.random() * 11),
                    minNumber = 0,
                    maxNumber = 10,
                    maxPossiblePrize = 30;
                while (turns > 0) {
                    let guessNum = prompt(
                        "Enter a number from " + minNumber + " to " + maxNumber + "\n" +
                        "Attemts left: " + turns + "\n" +
                        "Total prize: " + totalPrize + "$\n" +
                        "Possible prize in current attempt: " + maxPossiblePrize + "$");
                    if (parseInt(guessNum) === x) {
                        totalPrize += maxPossiblePrize;
                        alert("Congratulation! Your prize is:" + totalPrize + " $");
                        doYouPlay = confirm("Do you want to continue?");
                        if (doYouPlay === false) {
                            alert('Thank you for a game. Your prize is: ' + totalPrize + "$");
                            break;
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        alert('Thank you for a game. Your prize is: ' + totalPrize + "$");
                        doYouPlay = confirm("Do you want to play a game again?");
                        maxPossiblePrize = parseInt(maxPossiblePrize / 2);
                        if (doYouPlay === false) {
                            alert('You did not become a millionaire, but can.');
                            break;
                        }
                        else {
                            break;
                        }
                    }
                }
                turns = turns - 1;
            }
        }
        else {
            alert('Thank you for a game. Your prize is: ' + totalPrize + "$");
            doYouPlay = confirm("Do you want to play a game again?");
            maxPossiblePrize = parseInt(maxPossiblePrize / 2);
            if (doYouPlay === false) {
                alert('You did not become a millionaire, but can.');
                break;
            }
            turns = turns - 1;
        }
    }
}
