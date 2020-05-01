export default class Asteroid {

    // Asteroid properties
    constructor(game) {
        let newAsteroidImage = document.createElement("img");
        newAsteroidImage.src = "./assets/asteroids/a" + Math.floor(Math.random() * 21) + ".png"
        this.image = newAsteroidImage;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = {
            x: Math.floor(Math.random() * this.gameWidth),
            y: -70
        }

        this.speed = {
            x: (Math.random() - 0.5) * 5,
            y: Math.random() * 4
        }

        this.size = 40;
    }

    draw(context) {
        // context.fillRect(this.position.x, this.position.y, this.size, this.size)
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Delete asteroids that go too far out of bounds
        if (this.position.x > 900 || this.position.x < -80 || this.position.y > 700 || this.position.y < -100) {
            const index = this.game.gameObjects.indexOf(this);
            if (index > -1) {
                this.game.gameObjects.splice(index, 1);
            }
        } 

        // Positions for collision detection
        let spaceshipPosition = {
            x: this.game.spaceship.position.x,
            y: this.game.spaceship.position.y,
            radius: 10
        } 
        let asteroidPosition = {
            x: this.position.x,
            y: this.position.y,
            radius: 17.5
        }

        // Collision Detection
        var dx = spaceshipPosition.x - asteroidPosition.x;
        var dy = spaceshipPosition.y - asteroidPosition.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < spaceshipPosition.radius + asteroidPosition.radius) {
            this.game.spaceship.src = "./assets/ship-explosions/l-explosion.png"
        }

    }

}