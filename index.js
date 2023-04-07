
// To create a Empty 2D array 

let rows = 3;
let cols = 3;
let arr = new Array(rows);
for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
}

// Building the logic for the game to show the 'X' or the '0'


let n = 9;
const display = (e) => {
    // To get the clicked element
    let box = e.currentTarget;
    let boxId = box.getAttribute('id');
    let status = box.getAttribute("data-status");
    if (status === "true") {
        console.log("It is already Clicked");
    } else if (n % 2 !== 0) {
        box.innerHTML = '<span>X</span>';
        box.setAttribute("data-status", "true");
        n--;
        update(boxId, '1')
    } else {
        box.innerHTML = '<span>O</span>';
        box.setAttribute("data-status", "true");
        n--;
        update(boxId, '0')
    }
    draw()
};

// Giving response to what the user has clicked

let box1 = document.getElementById("box1");
box1.addEventListener("click", display);
let box2 = document.getElementById("box2");
box2.addEventListener("click", display);
let box3 = document.getElementById("box3");
box3.addEventListener("click", display);
let box4 = document.getElementById("box4");
box4.addEventListener("click", display);
let box5 = document.getElementById("box5");
box5.addEventListener("click", display);
let box6 = document.getElementById("box6");
box6.addEventListener("click", display);
let box7 = document.getElementById("box7");
box7.addEventListener("click", display);
let box8 = document.getElementById("box8");
box8.addEventListener("click", display);
let box9 = document.getElementById("box9");
box9.addEventListener("click", display);


let result = document.getElementById("result")





// Algorithm for the Updating the state of the Game, If someone has wined then show the winner otherwise declare draw

let row = 0;
let col = 0;

function update(position, symbol) {
    // First will decide where the data will go => Decide the row and the column of the array


    if (position === "box1") {
        row = 0; 
        col = 0;
    }
    else if (position === "box2") {
        row = 0; 
        col = 1;
    }
    else if (position === "box3") {
        row = 0; 
        col = 2;
    }
    else if (position === "box4") {
        row = 1; 
        col = 0;
    }
    else if (position === "box5") {
        row = 1; 
        col = 1;
    }
    else if (position === "box6") {
        row = 1; 
        col = 2;
    }
    else if (position === "box7") {
        row = 2; 
        col = 0;
    }
    else if (position === "box8") {
        row = 2; 
        col = 1;
    }
    else if (position === "box9") {
        row = 2; col = 2;
    };
  
    // Then place the Symbole in it's position

    modify(row, col, symbol)
    
    // Write the algorithm to decide the winner and the game

    // For Rows
    rowWinner(0, 0, 1, 2);
    rowWinner(1, 0, 1, 2);
    rowWinner(2, 0, 1, 2);

    // For Cols
    colWinner(0, 0, 1, 2);
    colWinner(1, 0, 1, 2);
    colWinner(2, 0, 1, 2);

    // For digonals
    digoWinner(0, 0, 1, 1, 2, 2);
    digoWinner(0, 2, 1, 1, 2, 0);


};



// Modify the array according to the row col and symbol

function modify(row, col, symbole) {
    arr[row][col] = symbole;
}


// Creating the Function to check the row winner 

function rowWinner(r, c1, c2, c3) {
    if (arr[r][c1] == arr[r][c2] && arr[r][c2] == arr[r][c3] && arr[r][c1] != undefined) {
        let winner;
        if (arr[r][c1] === '0') {
            winner = 'O'
        } else {
            winner = 'X'
        }
        document.getElementById(
            "result"
        ).innerText = `${winner} Won, Reloading in 3 seconds`;
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
}


// Creating the Function to check the Column winner

function colWinner(c, r1, r2, r3) {
    if (arr[r1][c] == arr[r2][c] && arr[r2][c] == arr[r3][c] && arr[r1][c] != undefined) {
        let winner;
        if (arr[r1][c] === '0') {
            winner = 'O'
        } else {
            winner = 'X'
        }
        document.getElementById(
            "result"
        ).innerText = `${winner} Won, Reloading in 3 seconds`;
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
}

//Creating the Function to Check the Digonal Winner

function digoWinner(r1,c1,r2,c2,r3,c3) {
    if (arr[r1][c1] == arr[r2][c2] && arr[r2][c2] == arr[r3][c3] && arr[r1][c1] != undefined) {
        let winner;
        if (arr[r1][c1] === '0') {
            winner = 'O'
        } else {
            winner = 'X'
        }
        document.getElementById(
            "result"
        ).innerText = `${winner} Won, Reloading in 3 seconds`;
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
}

// Algorithm for the situation when the game is Draw!


function draw() {
    let resultText = document.getElementById("result");

    // Collecting the data of the status of every element 
    _box1 = box1.getAttribute("data-status")
    _box2 = box2.getAttribute("data-status")
    _box3 = box3.getAttribute("data-status")
    _box4 = box4.getAttribute("data-status")
    _box5 = box5.getAttribute("data-status")
    _box6 = box6.getAttribute("data-status")
    _box7 = box7.getAttribute("data-status")
    _box8 = box8.getAttribute("data-status")
    _box9 = box9.getAttribute("data-status")

    // Writing the condition for the game to be draw
    if (_box1 === "true" &&
        _box2 === "true" &&
        _box3 === "true" &&
        _box4 === "true" &&
        _box5 === "true" &&
        _box6 === "true" &&
        _box7 === "true" &&
        _box8 === "true" &&
        _box9 === "true"
    ) {
        if (
            resultText != "X Won, Reloading in 3 seconds" &&
            resultText != "O Won, Reloading in 3 seconds"
        ) {
            resultText.innerText = "It's a draw!,Reloding in 3 seconds";
            setTimeout(() => {
                location.reload()
            }, 3000)
        }
    }
}

