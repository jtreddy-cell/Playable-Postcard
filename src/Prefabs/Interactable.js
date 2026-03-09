class Interactable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

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
        console.log("Interacted with " + this.constructor.name);
        // Play small animation or sound here
        this.scene.events.emit('interaction');
    }
}
