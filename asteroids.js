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
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt, context) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Delete asteroids that go too far out of bounds
        if (this.position.x > 900 || this.position.x < -80 || this.position.y > 700 || this.position.y < -100) {
            const index = this.game.gameAsteroidObjects.indexOf(this);
            if (index > -1) {
                this.game.gameAsteroidObjects.splice(index, 1);
            }
        }

        // Positions for collision detection with spaceship
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


        // Collision Detection with lasers
        for (var i = 0; i < this.game.gameLaserObjects.length; i++) {
            const thisLaser = this.game.gameLaserObjects[i];
            let laserPosition = {
                x: thisLaser.position.x,
                y: thisLaser.position.y,
                radius: 5
            }

            var dxLaser = laserPosition.x - asteroidPosition.x;
            var dyLaser = laserPosition.y - asteroidPosition.y;
            var distanceLaser = Math.sqrt(dxLaser * dxLaser + dyLaser * dyLaser);

            // If collision, draw a quick explosion
            if (distanceLaser < laserPosition.radius + asteroidPosition.radius) {
                this.createExplosion(context, this.position.x, this.position.y, this.size, this.size);

                // Remove Asteroid
                const indexAsteroid = this.game.gameAsteroidObjects.indexOf(this);
                if (indexAsteroid > -1) {
                    this.game.gameAsteroidObjects.splice(indexAsteroid, 1);
                }

                // Remove Laser
                const indexLaser = this.game.gameLaserObjects.indexOf(thisLaser);
                if (indexLaser > -1) {
                    this.game.gameLaserObjects.splice(indexLaser, 1);
                }
            }
        }


        // Collision Detection with spaceship
        var dxSpaceship = spaceshipPosition.x - asteroidPosition.x;
        var dySpaceship = spaceshipPosition.y - asteroidPosition.y;
        var distanceSpaceship = Math.sqrt(dxSpaceship * dxSpaceship + dySpaceship * dySpaceship);
        if (distanceSpaceship < spaceshipPosition.radius + asteroidPosition.radius) {
            this.game.spaceship.src = "./assets/ship-explosions/l-explosion.png"
            this.game.lives--;
        }

    }

    createExplosion(context, x, y, w, h) {
        let explosionImage = document.createElement("img");
        explosionImage.src = "./assets/ship-explosions/m-explosion.png";
        context.drawImage(explosionImage, x, y, w, h);
    }

}