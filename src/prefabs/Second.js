//Rocket prefab
class Second extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        this.isFiringSecond = false;
        this.moveSpeedSecond = 2;
        this.sfxRocketSecond = scene.sound.add('sfx_rocketSecond');
    }

    update() {
        // left/right movement
        if(!this.isFiringSecond) {
            if(keyA.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeedSecond;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeedSecond;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyX)) {
            this.isFiringSecond = true;
            this.sfxRocketSecond.play();
        }
        // if fired, move up
        if(this.isFiringSecond && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeedSecond
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    reset() {
        this.isFiringSecond = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}