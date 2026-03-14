class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    create() {
        // add background
        this.add.image(0, 0, 'message').setOrigin(0, 0);

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            }
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - 100, 'really cool and sick message', textConfig).setOrigin(0.5);

        // Define restart key
        this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.restartKey)) {
            this.scene.start('parkScene');
        }
    }
}
