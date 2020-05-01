// import Laser from "./lasers.js";

export default class IntputHandler {

    constructor(spaceship) {

        // START MOVEMENT
        document.addEventListener("keydown", function(event) {

            switch (event.keyCode) {
                case 37:
                    spaceship.moveLeft();
                break;

                case 38:
                    spaceship.moveUp();
                break;

                case 39:
                    spaceship.moveRight();
                break;

                case 40:
                    spaceship.moveDown();
                break;

                // case 32:
                    // LASERS PEW PEW PEW
                // break;
            }

        })

        // STOP MOVEMENT
        document.addEventListener("keyup", function() {
            switch (event.keyCode) {

                // Left
                case 37:
                    if (spaceship.speed < 0 && spaceship.direction === "horizontal") {
                        spaceship.stop();
                    };
                break;

                // Up
                case 38:
                    if (spaceship.speed < 0 && spaceship.direction === "vertical") {
                        spaceship.stop();
                    };
                break;

                // Right
                case 39:
                    if (spaceship.speed > 0 && spaceship.direction === "horizontal") {
                        spaceship.stop();
                    }
                break;

                // Down
                case 40:
                    if (spaceship.speed > 0 && spaceship.direction === "vertical") {
                        spaceship.stop();
                    }
                break;
            }
        })
    }
}