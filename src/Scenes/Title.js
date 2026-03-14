class Title extends Phaser.Scene{
    constructor() {
        super("titleScene");
    }  

    preload() {
        this.load.image('morning', './assets/backgrounds/morning.png');
        this.load.image('noon', './assets/backgrounds/noon.png');
        this.load.image('afternoon', './assets/backgrounds/afternoon.png');
        this.load.image('football', './assets/football.png');
        this.load.spritesheet('squirrel', './assets/squirrel.png', { frameWidth: 48, frameHeight: 48 });
        this.load.atlas("book","assets/book.png","assets/book.json");
        this.load.audio('bgm', './assets/bgm.mp3');
        this.load.audio('interaction', './assets/interact.wav');
        this.load.audio('squirrel_sound', './assets/squirrel.mp3');
    }

    create() {
        // add background and music
        this.add.image(0, 0, 'morning').setOrigin(0, 0);
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

        // Display credits text in bottom left corner
        let creditConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            }
        }
        this.add.text(10, game.config.height - 30, '', creditConfig).setOrigin(0, 0.5);
        
    }

    update() {
        // Wait for player to click to start the game
        if (this.input.activePointer.isDown) {
            this.scene.start('parkScene');
        }
    }
}