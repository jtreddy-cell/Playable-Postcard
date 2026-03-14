/* Title: Playable Postcard 
Name: Jay Reddy
Date: March 2026
Time: 15 hours
Phaser3 Components Used: Tweens (Football and Squirrel), Animation Manager (Book and Squirrel), Arcade Physics (for Interactables), Text (for Title and Credits), Sound (for BGM and Interaction)
Credits (also in README.md):
Art Credits:
Football sprite by helac_dokugan on itch.io - https://helac-dogukan.itch.io
Book Sprite by Stagnation on OpenGameArt.org - https://opengameart.org/users/stagnation
Squirrel Sprite by Elthen's Pixel Art Shop on itch.io - https://elthen.itch.io

Audio Credits:
Music by <a href="https://pixabay.com/users/juliush-3921568/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7839">Julius H.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7839">Pixabay</a>
Squirrel sound effect by Sound Effect by <a href="https://pixabay.com/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=188097">floraphonic</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=188097">Pixabay</a>

*/

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Title, Park, Message]
}

let game = new Phaser.Game(config);

// reserve keyboard bindings
let keyUP, keyDOWN, keySPACE, keyESC

let { width, height } = game.config