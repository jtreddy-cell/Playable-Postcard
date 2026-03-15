class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    preload() {
        // backgrounds
        this.load.image('title', './assets/backgrounds/title.png');
        this.load.image('morning', './assets/backgrounds/morning.png');
        this.load.image('noon', './assets/backgrounds/noon.png');
        this.load.image('afternoon', './assets/backgrounds/afternoon.png');
        this.load.image('evening', './assets/backgrounds/evening.png');
        this.load.image('message', './assets/backgrounds/message.png');
        this.load.image('transition', './assets/backgrounds/transition.png');

        // sprites 
        this.load.image('football', './assets/football.png');
        this.load.image('soccer', './assets/soccer.png');
        this.load.spritesheet('squirrel', './assets/squirrel.png', { frameWidth: 48, frameHeight: 48 });
        this.load.atlas("book", "assets/book.png", "assets/book.json");

        // audio
        this.load.audio('bgm', './assets/bgm.mp3');
        this.load.audio('interaction', './assets/interact.wav');
        this.load.audio('squirrel_sound', './assets/squirrel.mp3');
    }

    create() {
        // add background and music
        this.add.image(0, 0, 'title').setOrigin(0, 0);
        this.sound.play("bgm", { loop: true });

        // Display title text
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '48px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 10,
                bottom: 10,
            }
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - 50, 'Playable Postcard', textConfig).setOrigin(0.5);

        // Display instructions text below title
        let instructionConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            }
        }
        this.add.text(game.config.width / 2, game.config.height / 2 + 20, 'Click to start. Press on objects in the park and see what happens!', instructionConfig).setOrigin(0.5);

        // Display credits text in bottom left corner
        let creditConfig = {
            fontFamily: 'Courier',
            fontSize: '14px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            }
        }
        this.add.text(10, game.config.height - 70, 'Art Credits:\nFootball sprite by helac_dokugan on itch.io\nBook Sprite by Stagnation on OpenGameArt.org\nSoccer ball sprite by BeeMaxStudio on itch.io\nSquirrel Sprite by Elthens Pixel Art Shop on itch.io\n \nAudio Credits:\nMusic by juliush on Pixabay\nSounds effects from floraphonic on pixabay and https://mixkit.co/free-sound-effects/game/\n', creditConfig).setOrigin(0, 0.5);

    }

    update() {
        // Wait for player to click to start the game
        if (this.input.activePointer.isDown && !this.isTransitioning) {
            this.isTransitioning = true;
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start('parkScene');
                this.isTransitioning = false;
            });
        }
    }
}