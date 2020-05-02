import Avatar from "./avatar.js";
import IntputHandler from "./input.js";
import Asteroid from "./asteroids.js";
import Laser from "./lasers.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameObjects = [];
        this.gamestate = GAMESTATE.MENU;
        this.spaceship = new Avatar(this);
        new IntputHandler(this.spaceship, this);
        this.lives = 1;
    }

    start() {
        if (this.gamestate !== GAMESTATE.MENU) return;

        this.gameObjects = [this.spaceship];

        setInterval(() => {
            this.asteroid = new Asteroid(this);
            this.gameObjects.push(this.asteroid);
        }, 100)

        this.gamestate = GAMESTATE.RUNNING;
    }

    update(dt) {
        if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) return;

        this.gameObjects.forEach((object) => object.update(dt));
    }

    draw(context) {
        this.gameObjects.forEach((object) => object.draw(context));

        // Display Pause Screen
        if (this.gamestate === GAMESTATE.PAUSED) {
            context.fillStyle = "rgba(0,0,0,0.5)";
            context.fillRect(0, 0, this.gameWidth, this.gameHeight);
            context.font = "48px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Paused", 400, 300);
        }

        // Display Start Screen
        if (this.gamestate === GAMESTATE.MENU) {
            context.font = "30px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("SPACE ADVENTURE!", 400, 200);
            context.fillText("Click to Start", 400, 250);
            context.font = "20px Arial";
            context.fillText("Directions:", 400, 500);
            context.fillText("Arrow Keys to Move, ESC to Pause", 400, 550);
        }

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            context.font = "48px Arial";
            context.fillStyle = "red";
            context.textAlign = "center";
            context.fillText("GAME OVER", 400, 250);
            context.font = "30px Arial";
            context.fillText("Click to start over", 400, 300);
        }

    }

    togglePause() {
        // Introduce game States
        this.gamestate === GAMESTATE.PAUSED ? this.gamestate = GAMESTATE.RUNNING : this.gamestate = GAMESTATE.PAUSED;

    }
}