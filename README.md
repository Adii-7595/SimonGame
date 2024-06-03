# SimonGame

# Simon Says Game

This is a simple Simon Says game built using HTML, CSS, and JavaScript. The game challenges the player to memorize and reproduce increasingly complex sequences of button presses.

## Table of Contents

- Demo
- Features
- Installation
- Usage
- Contributing
- License

## Demo

You can play the game [here](https://adii-7595.github.io/SimonGame/).

## Features

- Responsive design
- Interactive game play with visual and textual feedback
- Incremental difficulty
- Score tracking

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Adii-7595/SimonGame.git
    ```

2. Navigate to the project directory:

    ```bash
    cd simon-says-game
    ```

3. Open `index.html` in your favorite web browser.

## Usage

1. Open the `index.html` file in a web browser.
2. Press any key to start the game.
3. Watch the sequence of button flashes and sounds.
4. Repeat the sequence by clicking the buttons in the correct order.
5. The game will continue with progressively longer sequences until you make a mistake.
6. Your score is displayed when the game is over.

## Code Overview

### HTML

The structure of the game is defined in the `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simon Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Simon Game</h1>    
    <h2>Press Any Key To Start</h2>
    <div class="btn-container">
        <div class="line-one">
             <div class="btn red" type="button" id="red"></div>
            <div class="btn blue" type="button" id="blue"></div>
        </div>
        <div class="line-two">
            <div class="btn green" type="button" id="green"></div>
            <div class="btn yellow" type="button" id="yellow"></div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

### CSS

The styling of the game is handled in `style.css`:

```css
body {
    text-align: center;
    background-color: #91a7a8;
}

.btn {
    height: 200px;
    width: 200px;
    border-radius: 20%;
    border: 10px solid black;
    margin: 2.5rem;
    cursor: pointer;
}
.btn-container {
    display: flex;
    justify-content: center;
}

.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.green {
    background-color: green;
}
.yellow {
    background-color: yellow;
}

.flash {
    background-color: white;
}

.userFlash {
    background-color: orange;
}
```

### JavaScript

The game logic is implemented in `app.js`:

```javascript
let gamesSeq = [];
let userSeq = [];
let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let rndInd = Math.floor(Math.random() * 4);
    let rndColor = btns[rndInd];
    let rndBtn = document.querySelector(`.${rndColor}`);
    gamesSeq.push(rndColor);
    console.log(gamesSeq);
    btnFlash(rndBtn);
}

function checkAns(indx) {
    if (userSeq[indx] == gamesSeq[indx]) {
        if (userSeq.length == gamesSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#91a7a8";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gamesSeq = [];
    userSeq = [];
    level = 0;
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
