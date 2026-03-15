class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    create() {
        let h = this.scale.height;

        // container for whole vertical stack
        this.transitionContainer = this.add.container(0, 0);

        // backgrounds
        let parkBG = this.add.image(0, 0, 'evening').setOrigin(0, 0);
        let transitionBG = this.add.image(0, -h * 2, 'transition').setOrigin(0, 0);
        let messageBG = this.add.image(0, -h * 3, 'message').setOrigin(0, 0);

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'center',
            padding: { top: 5, bottom: 5 }
        };

        let msgText = this.add.text(
            this.scale.width / 2,
            -h * 3 + h / 2 - 100,
            'really cool and sick message',
            textConfig
        ).setOrigin(0.5);

        // add all backgrounds
        this.transitionContainer.add([
            parkBG,
            transitionBG,
            messageBG,
            msgText
        ]);

        // slide everything downward
        this.tweens.add({
            targets: this.transitionContainer,
            y: h * 3,
            duration: 5000,
            ease: 'Cubic.easeOut',
        });

        this.restartKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        );
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.restartKey)) {
            this.scene.start('parkScene');
        }
    }
}