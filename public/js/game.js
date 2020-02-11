const gameSettings = {
    playerSpeed: 200,
}

const config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

const game = new Phaser.Game(config);