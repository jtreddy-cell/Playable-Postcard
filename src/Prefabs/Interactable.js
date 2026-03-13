class Interactable extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, name) {
        super(scene, x, y, texture, frame);
        this.name = name;

        // Add to scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Make interactive
        this.setInteractive({ useHandCursor: true });
        this.on('pointerdown', () => {
            this.onInteraction();
        });
    }

    onInteraction() {
        this.scene.sound.play('interaction');

        const updateTime = () => {
            this.scene.timeOfDay += 1;
            this.scene.background.setTexture(this.scene.backgrounds[this.scene.timeOfDay]);
        };

        switch (this.name) {
            case 'football':
                console.log("Interacted with " + this.name);
                // Football is kicked into the distance and disappears. Gets smaller and smaller until it disappears.
                this.scene.tweens.add({
                    targets: this,
                    scale: 0,
                    x: this.scene.cameras.main.centerX,
                    y: this.scene.cameras.main.centerY,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        updateTime();
                        this.destroy();
                    }
                });
                break;
            case 'bike':
                console.log("Interacted with " + this.name);
                updateTime();
                break;
            case 'book':
                console.log("Interacted with " + this.name);
                this.play('book_turn');
                this.once('animationcomplete', () => {
                    updateTime();
                    this.destroy(); 
                });
                break;
            default:
                console.log("Interacted with " + this.name);
                updateTime();
        }
    }
}
