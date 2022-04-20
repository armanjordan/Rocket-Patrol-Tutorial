// -------Title-------
//
// Arman Jordan
// Rocket Patrol Mods
// 4/19/2022
// 10-11 hours
//
// -------Point Breakdown-------
//
// I changed the sprites, background, sound, and UI to support a new theme of shooting cannon
// balls towards enemy ships in the ocean(60 points)
//
// I added a 4th faster ship that is worth more points(20 points)
//
// I added a simultaneous 2nd player that is controlled by using A and D to move left and
// right, and the X button to fire (30 points)
//
//----------------------------



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyX;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;