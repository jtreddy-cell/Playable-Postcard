class Interactable extends Phaser.GameObjects.Sprite {
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
        this.scene.timeOfDay += 1;
        switch (this.name) {
            case 'football':
                console.log("Interacted with " + this.name);
                break;
            case 'bike':
                console.log("Interacted with " + this.name);
                break;
            case 'book':
                console.log("Interacted with " + this.name);
                break;
            default:
                console.log("Interacted with " + this.name);
        }
    }
}
