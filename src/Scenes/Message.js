class Message extends Phaser.Scene {
    constructor() {
        super("messageScene");
    }

    create() {
        this.h = this.scale.height;

        // container for whole vertical stack
        this.transitionContainer = this.add.container(0, 0);

        // backgrounds
        this.parkBG = this.add.image(0, 0, 'evening').setOrigin(0, 0);
        this.transitionBG = this.add.image(0, -this.h * 2, 'transition').setOrigin(0, 0);
        this.messageBG = this.add.image(0, -this.h * 3, 'message').setOrigin(0, 0);

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            color: '#FFFFFF',
            align: 'center',
            padding: { top: 5, bottom: 5 }
        };

        this.msgText = this.add.text(
            this.scale.width / 2,
            -this.h * 3 + this.h / 2,
            'Hey Ashish,\n Thanks for playing my postcard. You\'ve been a great\nfriend since middle school, and this was just something\n to try and relive some of the times we spent back in\n Country Brook. Thanks for the good times, I wouldn\'t be who\n I am today if it weren\'t for you.I miss you bro, hopefully\n it won\'t be too long until we can see each other again.\n Thanks, Jay. \n \n \n \n \n \n \n \n Click anywhere to play again.',
            textConfig
        ).setOrigin(0.5);

        // add all backgrounds
        this.transitionContainer.add([
            this.parkBG,
            this.transitionBG,
            this.messageBG,
            this.msgText
        ]);

        // slide everything downward
        this.tweens.add({
            targets: this.transitionContainer,
            y: this.h * 3,
            duration: 5000,
            ease: 'Cubic.easeOut',
        });
    }

    update() {
        // restart game if player clicks 
        if (this.input.activePointer.isDown) {
            this.scene.start("titleScene");
        }
    }
}