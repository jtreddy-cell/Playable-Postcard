class Park extends Phaser.Scene {
    constructor() {
        super("parkScene");
    }

    preload() {
        console.log("Preloading Park scene assets...");
        // Preload assets here
        this.load.image('background', './assets/background.png');
        this.load.spritesheet('football', './assets/football.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('bike', './assets/bike.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('book', './assets/bike.png', { frameWidth: 64, frameHeight: 64 });
        this.load.audio('bgm', './assets/bgm.mp3');
    }

    create() {
        console.log("Creating Park scene...");
        // add background and music
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.sound.play("bgm", { loop: true });
        

        // add interactive objects
        this.football = new Interactable(this, 200, 300, 'football', 0, 'football');
        this.bike = new Interactable(this, 400, 300, 'bike', 0, 'bike');
        this.book = new Interactable(this, 600, 300, 'book', 0, 'book');


        // State machine variables
        this.timeOfDay = 0;
        this.maxTime = 5;
    }

    update() {
        // Switch
    }

}
