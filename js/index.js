import Car from "./player.js";
import Obstacles from "./obstacles.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
}

const road = new Image();
road.src = "/lab-canvas-race-car/images/road.png";

const myCar = new Car(ctx);
const obstacle = [];

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let counter = 0;
let gameLoop = setInterval(startGame, 1000 / 10); //when startGame is removed, the car is not moving but it starts on the click, when added it doesnt start on click

function startGame() {
  clearCanvas();
  ctx.drawImage(road, 0, 0, 500, 700);
  myCar.draw();
  if (counter % 10 === 0) {
    obstacle.push(new Obstacles(ctx, canvas));
  }
  obstacle.forEach((ob) => {
    ob.draw();
    ob.move();
    if (
      ob.x < myCar.x + myCar.width &&
      ob.x + ob.width > myCar.x &&
      ob.y < myCar.y + myCar.height &&
      ob.height + ob.y > myCar.y
    ) {
      gameOver();
    }
  });
  counter++;
    moveCar();
}

function moveCar() {
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowLeft":
        myCar.moveLeft();
        break;
      case "ArrowRight":
        myCar.moveRight();
        break;
    }
  });
}

function gameOver() {
  clearInterval(gameLoop);
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", 10, 50);
}
/*function staysInBorders(myCar, canvas) {
  if (myCar.x > 500) { // left boundary
    return "Stop!"
  }
  console.log("Stop")
  if (myCar.x + myCar.width > canvas.width) { // right boundary
    myCar.x = canvas.width - myCar.width;
  }
}*/
