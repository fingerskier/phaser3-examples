var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('einstein', 'assets/pics/ra_einstein.png');

}

function create() {

    var image = this.add.image(0, 0, 'einstein');

}
