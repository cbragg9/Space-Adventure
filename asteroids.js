export default class Asteroid {

    constructor(game) {
        let newAsteroidImage = document.createElement("img");
        newAsteroidImage.src = "./assets/asteroids/a" + Math.floor(Math.random() * 21) + ".png"
        this.image = newAsteroidImage;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = {
            x: Math.floor(Math.random() * this.gameWidth),
            y: -70
        }

        this.speed = {
            x: (Math.random() - 0.5) * 5,
            y: Math.random() * 4
        }
    }

    drawAsteroid(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

}