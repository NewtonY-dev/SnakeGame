const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let score = 0;
let snake = [];

// Initialize the snake's head at a random position
snake[0] = {
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * rows) * scale,
};

let food = {
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * rows) * scale,
};

let playGame = setInterval(draw, 100);

// Initial direction
let d = "right";

// Keyboard control for snake direction
document.onkeydown = direction;

function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "right") d = "left";
  else if (key == 38 && d != "down") d = "up";
  else if (key == 39 && d != "left") d = "right";
  else if (key == 40 && d != "up") d = "down";
}

// Draw the snake and food, and update game state
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "red";
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  // Draw food
  ctx.fillStyle = "#ff0";
  ctx.strokeStyle = "green";
  ctx.fillRect(food.x, food.y, scale, scale);
  ctx.strokeRect(food.x, food.y, scale, scale);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Move in the current direction
  if (d == "left") snakeX -= scale;
  if (d == "up") snakeY -= scale;
  if (d == "right") snakeX += scale;
  if (d == "down") snakeY += scale;

  // Wrap around edges
  if (snakeX >= canvas.width) snakeX = 0;
  if (snakeY >= canvas.height) snakeY = 0;
  if (snakeX < 0) snakeX = canvas.width - scale;
  if (snakeY < 0) snakeY = canvas.height - scale;

  // Check food collision
  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * columns) * scale,
      y: Math.floor(Math.random() * rows) * scale,
    };
  } else {
    snake.pop();
  }

  let newHead = { x: snakeX, y: snakeY };

  if (eatSelf(newHead, snake)) {
    clearInterval(playGame);
  }

  snake.unshift(newHead);
}

// Check if snake collides with itself
function eatSelf(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}
