import Laser from "./lasers.js";

export default class Avatar {

    // Set the avatar properties
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 40;
        this.height = 40;

        this.position = {
            x: (game.gameWidth / 2) - (this.width / 2),
            y: game.gameHeight - this.height - 5,
        }

        this.maxSpeed = 10;
        this.moveSpeed = 5;
        this.speed = 0;
        this.direction = "";
        this.src = "./assets/user-avatar.png"
    }

    // Draw the spaceship avatar in the starting position
    draw(context) {
        var spaceshipImage = document.createElement("img");
        spaceshipImage.setAttribute("src", this.src)
        context.drawImage(spaceshipImage, this.position.x, this.position.y, this.width, this.height);
    }

    // Update the position of the avatar
    update(dt) {

        // Sets direction of movement
        this.direction === "horizontal" ? this.position.x += this.speed : this.position.y += this.speed;
    
        // Sets boundaries for avatar
        if (this.position.x > this.gameWidth - this.width) {
            this.position.x = this.gameWidth - this.width;
        } else if (this.position.x < 0) {
            this.position.x = 0;
        } else if (this.position.y < 0) {
            this.position.y = 0;
        } else if (this.position.y > this.gameHeight - this.height) {
            this.position.y = this.gameHeight - this.height;
        }
    }

    // Input Functions on keydowns
    moveLeft() {
        this.direction = "horizontal";
        this.speed = -this.moveSpeed;
    }

    moveRight() {
        this.direction = "horizontal";
        this.speed = this.moveSpeed;
    }

    moveUp() {
        this.direction = "vertical";
        this.speed = -this.moveSpeed;
    }

    moveDown() {
        this.direction = "vertical";
        this.speed = this.moveSpeed;
    }

    // Input Functions on keyups
    stop() {
        this.direction = "";
        this.speed = 0;
    }

    shootLaser(game) {
        let newLaser = new Laser(game);
        game.gameLaserObjects.push(newLaser);
    }

}