const plays = ["rock", "paper", "scissors"]

function computerPlay(plays) {
    selection =  Math.floor(Math.random() * plays.length);
    return plays[selection]
}

function playerSelection() {
    choice = prompt("What is your move, mortal?").toLowerCase()
    return choice
}

function win(player, comp) {
    console.log("You win! " + player + " beats " + comp)
}

function lose(player, comp) {
    console.log("You lose! " + comp + " beats " + player)
}

function tie() {
    console.log("Draw!")
}

function checkwinner(player, comp) {
    if (comp == "rock") {
        if (player == "scissors") {
            lose(player, comp)
            return "lose"
        }
        if (player == "rock") {
            tie()
        }
        if (player == "paper") {
            win(player, comp)
            return "win"
        }
    } 
    else if (comp == "scissors") {
        if (player == "paper") {
            lose(player, comp)
            return "lose"
        }
        else if (player == "scissors") {
            tie()
        }
        else {
            win(player, comp)
            return "win"
        }
    }
    else if (comp == "paper") {
        if (player == "rock") {
            lose(player, comp)
            return "lose"
        }
        else if (player == "paper") {
            tie()
        }
        else {
            win(player, comp)
            return "win"
        }
    }
    
}

function round() {
    compchoice = computerPlay(plays)
    playerchoice = playerSelection()
    while (!plays.includes(playerchoice)) {
        playerchoice = playerSelection()
    }

    return checkwinner(playerchoice, compchoice)
}

function fullGame() {
    var playerWin = 0
    var compWin = 0
    var roundNumber = 0
    while (roundNumber <= 5) {
        result = round()
        if (result == "win") {
            playerWin += 1;
            roundNumber += 1;
            console.log(roundNumber);
            console.log(playerWin);
            if (playerWin >= 3) {
                console.log("You Win!");
                break;
            }
        }
        else if (result == "lose") {
            compWin += 1;
            roundNumber += 1;
            if (compWin >= 3) {
                console.log("You Lose!");
                break;
            }
        }
    }

}

fullGame()