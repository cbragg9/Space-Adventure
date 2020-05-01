import Avatar from "./avatar.js";
import IntputHandler from "./input.js";
import Asteroid from "./asteroids.js";
import Laser from "./lasers.js";

// Refactoring
export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start() {

        // Create avatar in starting position
        this.spaceship = new Avatar(this);
        this.asteroid1 = new Asteroid(this);

        this.gameObjects = [this.spaceship, this.asteroid1];

        setInterval(() => {
            this.asteroid = new Asteroid(this);
            this.gameObjects.push(this.asteroid);
        }, 1000)

        // Input handlers
        new IntputHandler(this.spaceship);
    }

    update(dt) {
        this.gameObjects.forEach((object) => object.update(dt));
    }

    draw(context) {
        this.gameObjects.forEach((object) => object.draw(context));
    }
}