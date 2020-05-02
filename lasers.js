export default class Laser {

    // TO DO
    constructor(game) {
        let newLaserImage = document.createElement("img");
        newLaserImage.src = "./assets/beams-in-use/basic-beam.png"
        this.image = newLaserImage;
        this.game = game;

        this.position = {
            x: this.game.spaceship.position.x + 10,
            y: this.game.spaceship.position.y
        }

        this.speed = {
            y: -15
        }

        this.size = 20;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt) {
        this.position.y += this.speed.y;

        // Delete lasers that go too far out of bounds
        if (this.position.y < -100) {
            const index = this.game.gameLaserObjects.indexOf(this);
            if (index > -1) {
                this.game.gameLaserObjects.splice(index, 1);
            }
        }
    }



}