export default class IntputHandler {

    constructor(spaceship, game) {

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

                case 32:
                    if (game.gamestate === 1) {
                        spaceship.shootLaser(game);
                    }
                break;

                case 27:
                    game.togglePause();
                break;
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

        // START GAME ON CLICK
        const gamefieldEl = document.getElementById("gameField");
        gamefieldEl.addEventListener("click", function() {
            if (game.gamestate === 2) {
                game.start();
            } else if (game.gamestate === 3) {
                location.reload();
            }
        });

    }
}