class Beam extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        const {x, y} = scene.player;
        super(scene, x, y, "beam");
        scene.add.existing(this);
        scene.projectiles.add(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 250;
    }

    update () {
        if(this.y < 32) {
            this.destroy();
        }
    }
}

class Exlosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
    }
}