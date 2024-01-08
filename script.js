
// let gameContainer = document.querySelector(".game-container");
// let foodX, foodY;
// let velocityX=0,velocityY=0;
// let headX=12;headY=12;

// function generateFood() {
//     foodX = Math.floor(Math.random() * 25) + 1;
//     foodY = Math.floor(Math.random() * 25) + 1;
// }

// function renderGame() {
//     let updatedGame = `<div class="food" style="grid-area:${foodY}/${foodX};"></div>`;
//     headX+=velocityX;
//     headY+=velocityY;
//     if(headX == 0 || headY == 0 || headX == 26 || headY == 26){
//         game
//     }
//     gameContainer.innerHTML = updatedGame;
// }
// generateFood();
// renderGame();
// setInterval(renderGame,500);
// document.addEventListener('keydown',function(e){
//     let keyPressed = e.key;
//     if(keyPressed == 'ArrowDown' && velocityY!=1){
//         velocityX = 0;
//         velocityY = 1;

//     }
//     else if(keyPressed == 'ArrowUp' && velocityY!=-1){
//         velocityX = 0;
//         velocityY = -1;

//     }
//     else if(keyPressed == 'ArrowLeft' && velocityX!=1){
//         velocityX = 0;
//         velocityY = -1;

//     }
//     else if(keyPressed == 'ArrowRight' && velocityX!=-1){
//         velocityX = 0;
//         velocityY = 1;

//     }
//     // renderGame();

// })

let gameContainer = document.querySelector('.game-container');
let scoreContainer = document.querySelector('.score-container');
let foodX,foodY;
let headX = 12,headY=12;
let velocityX=0,velocityY=0;
let snakeBody = [];
let score = 0;



function generateScore(){
    score = score +1;
    return score;
}

function generateFood(){
foodX=Math.floor(Math.random()*25)+1;
foodY=Math.floor(Math.random()*25)+1;

for ( let i = 0; i < snakeBody; i++){
    if(snakeBody[i][1] == foodY && snakeBody[i][0] == foodX){
        generateFood();
    }
}
}
function gameOver(){
    snakeBody = [];
    headX = 12;
    headY = 12;
    generateFood();
    velocityX = 0;
    velocityY = 0;
    alert("Fir se Khele")
    score=0;
    scoreContainer.innerText = 0;

}


function renderGame(){
    let updatedGame =`<div class = "food" style = "grid-area: ${foodY}/${foodX};"></div>`;
    let updatedScore;
    if(foodX == headX && foodY == headY){
        snakeBody.push([foodX,foodY]);
        generateFood();
        updatedScore = generateScore(); 
        scoreContainer.innerText = updatedScore;

    }
    snakeBody.pop();
    headX+=velocityX;
    headY+=velocityY;
    snakeBody.unshift([headX,headY]);

    if(headX == 0 || headY == 0 || headY == 26 || headX == 26){
        gameOver();
    }
    for( let i = 1; i<snakeBody.length;i++){
        if(snakeBody[0][0] == snakeBody[i][0] && snakeBody[0][1] == snakeBody[i][1]){
            gameOver();
        }

    }

    for(let i = 0; i<snakeBody.length; i++){
        updatedGame +=`<div class = "snake" style = "grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`
    }

    gameContainer.innerHTML = updatedGame;
}
generateFood();
setInterval(renderGame,90);

document.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "ArrowUp" && velocityY != 1){
        velocityX=0;
        velocityY=-1;
    }
    else if(key == "ArrowDown" && velocityY != -1){
        velocityX=0;
        velocityY=1;
    }
    else if(key == "ArrowLeft" && velocityX != 1){
        velocityX=-1;
        velocityY=0;
    }
    else if(key == "ArrowRight" && velocityX != -1){
        velocityX=1;
        velocityY=0;
    }
})