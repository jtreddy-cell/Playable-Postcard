class Park extends Phaser.Scene {
    constructor() {
        super("parkScene");
    }

    preload() {
        console.log("Preloading Park scene assets...");
        // Preload assets here
        this.load.image('background', './assets/background.png');
        this.load.spritesheet('football', './assets/football.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        console.log("Creating Park scene...");
        // add background
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        // State machine variables
        this.timeOfDay = 0;
        this.maxTime = 5;
    }

    update() {
        // Scene update logic
    }
}
