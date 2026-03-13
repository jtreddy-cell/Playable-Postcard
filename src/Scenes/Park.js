class Park extends Phaser.Scene {
    constructor() {
        super("parkScene");
    }

    preload() {
        console.log("Preloading Park scene assets...");
        // Preload assets here
        this.load.image('morning', './assets/backgrounds/morning.png');
        this.load.image('noon', './assets/backgrounds/noon.png');
        this.load.image('afternoon', './assets/backgrounds/afternoon.png');
        this.load.image('football', './assets/football.png');
        this.load.spritesheet('bike', './assets/bike.png', { frameWidth: 64, frameHeight: 64 });
        this.load.atlas("book","assets/book.png","assets/book.json");
        this.load.audio('bgm', './assets/bgm.mp3');
        this.load.audio('interaction', './assets/interact.wav');
        this.backgrounds = ['morning', 'noon', 'afternoon', 'evening', 'night'];
    }

    create() {
        console.log("Creating Park scene...");
        // add background and music
        this.background = this.add.image(0, 0, this.backgrounds[0]).setOrigin(0, 0);
        this.sound.play("bgm", { loop: true });

        // Define book turning animation
        this.anims.create({
            key: 'book_turn',
            frames: this.anims.generateFrameNames("book",{
                prefix:"f",
                start:0,
                end:41
            }),
            frameRate:20,
            repeat:0
        });

        // add interactive objects
        this.football = new Interactable(this, 200, 400, 'football', 0, 'football');
        this.bike = new Interactable(this, 400, 400, 'bike', 0, 'bike');
        this.book = new Interactable(this, 600, 400, 'book', 0, 'book');


        // time of day stuff
        this.timeOfDay = 0;
        this.maxTime = 3;
    }

    update() {
        // Switch to next scene after max time
        if (this.timeOfDay >= this.maxTime) {
            console.log("Max time reached, switching to next scene...");
            this.scene.start("messageScene");
        }
    }

}
