import Avatar from "./avatar.js";
import IntputHandler from "./input.js";

let canvas = document.getElementById("gameField");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

// Create avatar in starting position
let spaceship = new Avatar(GAME_WIDTH, GAME_HEIGHT);
spaceship.drawAvatar(context);


// Moving the avatar
let lastTime = 0;

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    spaceship.update(dt);
    spaceship.drawAvatar(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();

// Input handlers

new IntputHandler(spaceship);