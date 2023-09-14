const playArea = document.querySelector(".playArea");
var snakeY = 1;
var snakeX = 1;

gameInit();


function gameInit() {
    
    
    
    snakeMovement();
}

function snakeMovement() {
    console.log("current")
    snake = `<div class="snakeHead" style="grid-area: ${snakeY} / ${snakeX}"></div>`
    playArea.innerHTML = snake;
    document.addEventListener("keydown", function (event){
        var key = event.key
        
        if (key === "ArrowDown") {
            snakeY += 1;
        } else if (key === "ArrowUp") {
            snakeY -= 1;
        } else if (key === "ArrowLeft"){
            snakeX -= 1;
        }
        else if (key === "ArrowRight"){
            snakeX += 1;
        }

        snake = `<div class="snakeHead" style="grid-area: ${snakeY} / ${snakeX}"></div>`
        playArea.innerHTML = snake;
    })

    
    
    
};

    
