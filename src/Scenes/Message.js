class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    preload() {
        console.log("Preloading assets for Message scene...");
        // Preload assets for message if any

    }

    create() {
        console.log("Creating Message scene...");
        
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '32px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            }
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - 100, 'TO: A CLOSE FRIEND', textConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, '"Hope you have a great day!"', { fontSize: '24px', fontStyle: 'italic', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + 100, 'Press ENTER to Restart', { fontSize: '18px', fill: '#FFF' }).setOrigin(0.5);

        // Define restart key
        this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.restartKey)) {
            this.scene.start('menuScene');
        }
    }
}
