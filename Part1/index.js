
let board = []

function clearBoard() {
    for(let i = 0; i < 9; i++) {

        board[i] = undefined
        document.querySelectorAll("td")[i].innerText = ""
    }
}

function play(clickedId) {
    let clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById("player")

    if(playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
     }else{
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
     }
    


    let topLeft = board[0];
    let topCenter = board[1];
    let topRight = board[2];
    let middleLeft = board[3];
    let middleCenter = board[4];
    let middleRight = board[5];
    let bottomLeft = board[6];
    let bottomCenter = board[7];
    let bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert("Player " + topLeft + ", a winner is you!")
        clearBoard()
        return
    
    }

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert("Player " + middleLeft + ", a winner is you!")
        clearBoard()
        return
    }

    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert("Player " + bottomLeft + ", a winner is you!")
        clearBoard()
        return
    }

    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert("Player " + topLeft + ", a winner is you!")
        clearBoard()
        return
    }

    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert("Player " + topCenter + ", a winner is you!")
        clearBoard()
        return
        
    }

    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert("Player " + topRight + ", a winner is you!")
        clearBoard()
        return
    }

    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert("Player " + topLeft + ", a winner is you!")
        clearBoard()
        return
    }

    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert("Player " + topRight + ", a winner is you!")
        clearBoard()
        return
    }



    let boardFull = true
    for(let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
    }

    if (boardFull === true) {
        alert("CAT's game")
        clearBoard()
    }


}

