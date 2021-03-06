class PreloadState extends Phaser.State {
    preload() {
        // create a loading bar
        this.loadingBar = this.add.sprite(this.game.width/2, 30, 'loading-bar');
        this.loadingBar.anchor.x = 0.5;
        this.load.setPreloadSprite(this.loadingBar);

        // this.game.add.plugin(new Tiled(this.game, this.game.stage));

        this.add.plugin(Phaser.Plugin.Tiled);

        let cacheKey = Phaser.Plugin.Tiled.utils.cacheKey;

        // images and sprites

        this.load.spritesheet('player', 'assets/sprites/player-spritesheet.png', 50, 50);
        this.load.image('player-face-border', 'assets/sprites/face-border.png');

        // audio

        this.load.audio('jump', 'assets/sfx/jump2.wav');
        this.load.audio('death', 'assets/sfx/death2.wav');
        this.load.audio('scream', 'assets/sfx/wilhelm_scream.wav');
        this.load.audio('skid', 'assets/sfx/skid.wav');
        this.load.audio('selectScreenMusic', ['assets/sfx/8-Bit-Perplexion.mp3', 'assets/sfx/8-Bit-Perplexion.ogg']);
        this.load.audio('gamePlayMusic', ['assets/sfx/Pixelin-It-Around-Town.mp3', 'assets/sfx/Pixelin-It-Around-Town.mp3']);

        // load the map from Tiled
        this.load.tiledmap(
            cacheKey('sketchworld', 'tiledmap'),
            'assets/maps/sketchworld/sketchworld.json',
            null,
            Phaser.Tilemap.TILED_JSON
        );
        // load the bg images from the Tiled map
        this.load.image('sketchworld_layer_pune-1', 'assets/maps/sketchworld/backgrounds/pune-1.jpg');
        this.load.image('sketchworld_layer_pune-2', 'assets/maps/sketchworld/backgrounds/pune-2.jpg');
        this.load.image('sketchworld_layer_beijing', 'assets/maps/sketchworld/backgrounds/beijing.jpg');
        this.load.image('sketchworld_layer_brisbane', 'assets/maps/sketchworld/backgrounds/brisbane.jpg');
        this.load.image('sketchworld_layer_insights-arkansas', 'assets/maps/sketchworld/backgrounds/insights-arkansas.jpg');
        this.load.image('sketchworld_layer_insights', 'assets/maps/sketchworld/backgrounds/insights.jpg');
        this.load.image('sketchworld_layer_labs', 'assets/maps/sketchworld/backgrounds/labs.jpg');
        this.load.image('sketchworld_layer_raleigh', 'assets/maps/sketchworld/backgrounds/raleigh-to-pune.jpg');

        this.load.image(
            cacheKey('sketchworld', 'tileset', 'sketchworld'),
            'assets/maps/sketchworld/sketchworld.png'
        );

        // load test player to avoid firebase lag
        this.load.json('test-player', 'data/player.json');
    }

    create() {
        console.log('PreloadState create');
    }

    update() {
        this.game.state.start('SplashState');
    }
}
