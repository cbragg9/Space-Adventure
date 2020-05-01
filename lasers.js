export default class Laser {

    constructor(spaceship) {
        let newLaserImage = document.createElement("img");
        newLaserImage.src = "./assets/beams-in-use/basic-beam.png"
        this.image = newLaserImage;

        this.position = {
            x: spaceship.position.x,
            y: spaceship.position.y
        }

        this.speed = {
            y: -10
        }
    }

    update(dt) {
        this.position.y += this.speed.y;
    }

    drawLaser(spaceship, context) {
        console.log(context);
        context.drawImage(this.image, this.position.x, this.position.y); 
    }

}