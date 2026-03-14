class Park extends Phaser.Scene {
    constructor() {
        super("parkScene");
    }

    create() {
        console.log("Creating Park scene...");
        // add background and music
        this.backgrounds = ['morning', 'noon', 'afternoon', 'evening'];
        this.background = this.add.image(0, 0, this.backgrounds[0]).setOrigin(0, 0);

        // Fade in
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // Define book turning animation
        this.anims.create({
            key: 'book_turn',
            frames: this.anims.generateFrameNames("book", {
                prefix: "f",
                start: 0,
                end: 41
            }),
            frameRate: 20,
            repeat: 0
        });

        // Define squirrel animations
        this.anims.create({
            key: 'squirrel_idle',
            frames: this.anims.generateFrameNumbers('squirrel', { start: 8, end: 13 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'squirrel_run',
            frames: this.anims.generateFrameNumbers('squirrel', { start: 16, end: 23 }),
            frameRate: 10,
            repeat: -1
        });

        // Define s2

        // add interactive objects
        this.football = new Interactable(this, 200, 400, 'football', 0, 'football');
        this.squirrel = new Interactable(this, 400, 300, 'squirrel', 0, 'squirrel');
        this.book = new Interactable(this, 600, 400, 'book', 0, 'book');


        // time of day stuff
        this.timeOfDay = 0;
        this.maxTime = 4;
    }

    update() {
        // Switch to next scene after max time
        if (this.timeOfDay >= this.maxTime) {
            console.log("Max time reached, switching to next scene...");
            this.scene.start("messageScene");
        }
    }

}
