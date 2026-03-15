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
                end: 40
            }),
            frameRate: 20,
            repeat: 0,
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

        // add interactive objects
        this.football = new Interactable(this, 250, 375, 'football', 0, 'football');
        this.soccer = new Interactable(this, 850, 325, 'soccer', 0, 'soccer');
        this.soccer.setScale(0.75);
        this.squirrel = new Interactable(this, 400, 300, 'squirrel', 0, 'squirrel');
        this.squirrel.play('squirrel_idle');
        this.book = new Interactable(this, 500, 400, 'book', 0, 'book');

        this.book.on('animationcomplete-book_turn', () => {
            this.book.setFrame('f0');
        });

        // time of day stuff
        this.timeOfDay = 0;
        this.maxTime = 4;
    }

    update() {
        // Switch to next scene after max time
        if (this.timeOfDay >= this.maxTime) {
            this.scene.start('messageScene');
        }
    }

}
