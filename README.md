# Snake Game

## Description

A classic Snake game implemented using HTML, CSS, and JavaScript. The player controls a snake using the arrow keys, aiming to eat food items that appear randomly on the screen. Eating food makes the snake grow longer. The game ends if 
the snake collides with itself.

## Features

* Classic Snake gameplay mechanics.
* Snake growth upon consuming food.
* Game over condition on self-collision.
* Rendered using the HTML Canvas API.
* Keyboard controls (Arrow Keys) for snake movement.
* Randomized starting position for the snake.
* Randomized food placement.
* Screen wrapping: the snake reappears on the opposite side when hitting the edge.

## Technology Stack

* **HTML5**: Structures the web page.
* **CSS3**: Styles the elements, including the game canvas background.
* **JavaScript (ES6)**: Handles game logic, controls, and rendering.
* **[HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)**: Used for drawing the game elements (snake, food) dynamically.

## Directory Structure

```
└── newtony-dev-snakegame/
├── index.html        # Main HTML file
├── css/
│   └── style.css     # Stylesheet for the game
└── js/
└── script.js     # JavaScript file containing the game logic
```

## Installation

No complex installation is required. Simply clone or download the repository and open the `index.html` file in your web browser.

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd newtony-dev-snakegame
    ```
2.  **Open the game:**
    Double-click the `index.html` file or open it using your web browser.

## Usage

Once the `index.html` file is opened in a browser:

* Use the **Arrow Keys** (`Up`, `Down`, `Left`, `Right`) on your keyboard to control the direction of the snake.
* Try to eat the yellow food blocks that appear on the screen.
* Avoid running the snake into its own body.

**Example Snippet (Game Loop):**

```javascript
// js/script.js
let playGame = setInterval(draw, 100); // Game loop interval

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#fff"; // Snake color
    ctx.strokeStyle = "red"; // Snake border
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  // Draw food
  ctx.fillStyle = "#ff0"; // Food color
  ctx.strokeStyle = "green"; // Food border
  ctx.fillRect(food.x, food.y, scale, scale);
  ctx.strokeRect(food.x, food.y, scale, scale);

  // ... (movement logic, collision detection, etc.) ...
}

MIT License

Copyright (c) 2025 Newton Yetsedaw

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
