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

        // Input handlers
        new IntputHandler(this.spaceship);
    }

    update(dt) {
        this.spaceship.update(dt);

        this.asteroid1.update(dt);
    }

    draw(context) {
        this.spaceship.drawAvatar(context);

        this.asteroid1.drawAsteroid(context);
    }
}