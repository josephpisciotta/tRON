// *** UI/HUD COMPONENTS
// Button
// Background

// *** SERVICE PROVIDER COMPONENTS
// Other
// Touchable

// *** GAME COMPONENTS
// Block
// Reward
// Score
// Player
// Enemy
// Ground 
// Finish


// *** LEVEL CREATOR COMPONENTS
// Level











/*********
 ****** UI/HUD COMPONENTS
 *********/

/**
 * Button Component
 */
Crafty.c("Button", {
    // TODO: Develop this
});

/**
 * Background component
 */
Crafty.c("Background", {
    /**
     * @private
     * @property {int} _width
     */
    _width: 1500,
    /**
     * @private
     * @property {int} _height
     */
    _height: 500,
    /**
     * Constructor
     * @public
     */
    init: function() {
        this.requires("2D, Image, Canvas, Other");
        this.image("images/cityscape2.png", "repeat-x");
        this.attr({x: 0, y: 400, w: MAP_WIDTH, h: 500});
    }
});









/*********
 ****** GAME COMPONENTS
 *********/

/**
 * Block platform component
 */
Crafty.c("Block", {
    /**
     * Constructor
     * @public
     */
    init: function() {
        this.requires("2D, DOM, Touchable, Collision");

        // When a block colledes with a Player, stop movement of all "Other" entities.
        this.onHit("Player", function() {
            var others = Crafty("Other");
            for (var i = 0; i < others.length; i++) {
                var ob = Crafty(others[i]);
                if (others[i])
                    Crafty(others[i]).stopMovement();
            }
        });
    }
});

/**
 * Enemy
 * All things that slow him down when hit or kill him will be an enemy
 */
Crafty.c("Enemy", {
    init: function() {

        this.requires("2D, DOM, Solid, Gravity, Image, Collision");

        this.gravity("Ground")
                .gravityConst(GRAVITY)
                .attr({x: 66, y: 66, w: 20, h: 40})
                .css({"background-color": "red", "width": "66px", "overflow": "hidden"});

        this.bind("EnterFrame", function() {
            this.x += GAME_SPEED - 3;
        })
                .image("images/1enemy.png", "no-repeat");

        this.onHit("Player", function() {
            var others = Crafty("Other");
            for (var i = 0; i < others.length; i++) {
                var ob = Crafty(others[i]);
                if (others[i])
                    Crafty(others[i]).stopMovement();
            }
            Crafty.scene("DeathScene");

        });

    },
    /**
     * THIS IS A BAD NAME IN THIS SCENRIO BECAUSE IT DOES NOT STOP THE MOVEMENT
     * IT is called this to override 'other' stopMovement
     */
    stopMovement: function() {
        if (this.x < 0) {
            this.x += GAME_SPEED + (GAME_SPEED - 1);
        }
        else {
            this.x += GAME_SPEED + 3;
        }

        return this;
    }
});

/**
 * Finish line
 **/
Crafty.c("Finish", {
    init: function() {
        this.requires("2D, DOM, Collision, Touchable");
        this.attr({
            w: 40  // Random box size between 100-200
                    , h: 5000
        })
                .css({"background-color": 'none'})
                .onHit("Player", function() {
            Crafty.scene("FinishScene");
        });
    }
});

/**
 * flamingEnemy
 */
Crafty.c("FlamingEnemy", {
    init: function() {
        this.requires("2D, DOM, Collision, Other");
        this.attr({
            y: 450
                    , h: 10
        })
                .css({"background-color": 'red'});

        this.onHit("Player", function() {
            var others = Crafty("Other");
            for (var i = 0; i < others.length; i++) {
                var ob = Crafty(others[i]);
                if (others[i])
                    Crafty(others[i]).stopMovement();
            }
            Crafty.scene("DeathScene");

        });
    }
});


/**
 * Score Component
 */

Crafty.sprite(66, "images/tRON.png", {player: [0, 0]});

Crafty.c('Score', {
    /**
     * @private
     * @property {int} _score
     */
    _score: 0,
    /**
     * @private
     * @property {int} _coinsInARow
     */
    _coinsInARow: 0,
    /**
     * @private
     * @property {int} _pointMultiplier 
     */
    _pointMultiplier: 1,
    /** 
     * init the variables and add the game counter stuff
     */
    init: function() {
        this.bind('EnterFrame', function() {
            this.incrementQuantum();
            _ProgressBar.updateBarProgress(_CycleCount);
            _CoinsInARowBar.updateBarProgress(this._coinsInARow);

        });
    },
    incrementCoinsInARow: function() {
        this._coinsInARow++;

        if (this._coinsInARow >= _CoinsForBonus) {
            this._pointMultiplier++;
            _CycleCount = 0;
            this._coinsInARow = 0;
        }
        return this;
    },
    incrementQuantum: function() {
        _CycleCount++;
        if (_CycleCount >= _TimeQuantum) {
            _CycleCount = 0;
            this._coinsInARow = 0;
            if (this._pointMultiplier > 1)
                this._pointMultiplier--;
        }
        return this;
    },
    resetQuantum: function() {
        _CycleCount = 0;
        return this;
    },
    /**
     * Sets our point multiplier
     * @public
     * @method setPointMultiplier
     * @param {int} value
     * @returns {Score} score component
     */
    setPointMultiplier: function(value) {
        this._pointMultiplier = value;
        return this;
    },
    /**
     * Increments Player score
     * @public
     * @method incrementScore
     * @param {int} by value to increment score by
     * @returns {Score} score component
     */
    incrementScore: function(by) {
        this._score += (by * this._pointMultiplier);
        this.displayScore();
        return this;
    },
    /**
     * Decrements player score
     * @public
     * @method decrementScore
     * @param {int} by value to decrement score by
     * @returns {Score} score component
     */
    decrementScore: function(by) {
        this._score -= by;
        this.displayScore();
        return this;
    },
    /**
     * Gets current score
     * @public
     * @method getScore
     * @returns {int} score
     */
    getScore: function() {
        return this._score;
    },
    getPointsInARow: function() {
        return this._pointsInARow;
    },
    getPointsMultiplier: function() {
        return this._pointsMultiplier;
    },
    /**
     * Displays current score
     * @public
     * @method displayScore
     */
    displayScore: function() {
        _ScoreEntity.text("" + this.getScore());
    },
    displayMultiplier: function() {
        _MultiplierDisplay.text("" + this.getPointsMultiplier());
    },
    displayPointsInARow: function() {
        _PointsInARowDisplay.text("" + this.getPointsInARow());
    }
});

/**
 * Reward Component
 */
Crafty.c("Reward", {
    /**
     * @private
     * @property {int} _value value of reward
     */
    _value: 10,
    /**
     * Constructor
     * @public
     */
    init: function() {

        // Load required things
        this.requires("2D, DOM, Other, SpriteAnimation");
        this.requires("Multiway, Collision");

        // Increase player points on colission
        this.onHit("Player", function() {

            // play sound when hitting reward
            Crafty.audio.add("reward", "media/sounds/reward.mp3");
            Crafty.audio.play("reward");

            // stop after half a second
            setTimeout(function() {
                Crafty.audio.stop("reward");
            }, 500);

            this.destroy();
            Crafty('Score').incrementScore(this.getValue())
                    .incrementQuantum().incrementCoinsInARow();
        });

    },
    /**
     * Gets value of reward
     * @public
     * @method getValue
     * @returns {int} rewards value
     */
    getValue: function() {
        return this._value;
    }
});

/**
 * Player component
 */
Crafty.c("Player", {
    /**
     * @private
     * @property {int} _lives contains the current player's lives
     */
    _lives: 5,
    /**
     * Constructor
     * @public
     */
    init: function() {

        // Load required things
        this.requires("2D, DOM, SpriteAnimation");
        this.requires("Twoway, Gravity, Collision");
        this.requires("Keyboard, player, Text");

        // Set up controlls, gravity, ground interaction
        this.twoway(0, 10)
                //.generateTrail()
                .gravity("Touchable")
                .gravityConst(GRAVITY)
                .onHit("Touchable", this.stopFalling);

        // player state animations
        this.animate("PlayerUp", [[1, 0], [0, 0]])
                .animate("PlayerNormal", [[0, 0]]);

        // Activate animation for up and normal based on movement
        // Will also need Key Event listener for the down arrow as 
        // the player never really moves
        this.bind('NewDirection', function(data) {

            // Y axis negative change means up
            if (data.y < 0) {
                this.animate("PlayerUp", 15, 0);
            }
            else {
                this.animate("PlayerNormal", 10, 1);
            }

        });

    },
    /**
     * Gets player's lives
     * @public
     * @method getLives
     * @returns {int} lives
     */
    getLives: function() {
        return this._lives;
    },
    /**
     * Decreases player's lives
     * @public
     * @method decreaseLives
     * @param {int} by value by which we want to decrease the lives
     * @returns {}
     */
    decreaseLives: function(by) {
        this._lives -= by;
        return this;
    },
    /**
     * Stops player from falling
     * @public
     */
    stopFalling: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    }
});

/**
 * Ground Component
 */
Crafty.c("Ground", {
    /**
     * @private
     * @property {int} _xPos - x position
     */
    _xPos: 0,
    /**
     * @private
     * @property {int} _yPos - y position
     */
    _yPos: 460,
    /**
     * @private
     * @property {int} _width - ground width
     */
    _width: MAP_WIDTH,
    /**
     * @private
     * @property {int} _height - height of the ground
     */
    _height: 20,
    /**
     * Constructor
     * @public
     */
    init: function() {
        this.requires("2D, DOM, Touchable");
        this.x = this._xPos;
        this.y = this._yPos;
        this.w = this._width;
        this.h = this._height;
        this.css({"background-color": 'rgb(255,255,255)'});
    }
});








/*********
 ****** SERVICE COMPONENTS
 *********/

/**
 * All other components that exist in the planet of this game. 
 */
Crafty.c("Other", {
    /**
     * Constructor
     * @public
     */
    init: function() {
        this.bind("EnterFrame", function() {
            this.x -= GAME_SPEED;
        });
    },
    /**
     * Stops other components from moving
     * @public
     * @returns {Other} other component
     */
    stopMovement: function() {
        this.x += GAME_SPEED;
        return this;
    }
});

/**
 * Touchable service component
 **/
Crafty.c("Touchable", {
    init: function() {
        this.requires("Other");
    }
});


Crafty.c("PauseMenu", {
    init: function() {

    }
});





/*********
 ****** LEVEL CREEATOR COMPONENTS
 *********/


/**
 * Level Generator
 */
Crafty.c("Level", {
    /**
     * @private
     * @property {array} _Objects - contains all the enemy and block components
     */
    _BlockObjects: new Array(),
    _CoinObjects: new Array(),
    _EnemyObjects: new Array(),
    /**
     * Constructor
     * @public
     */
    init: function() {

        Crafty.audio.play("space");

        // background
        _Backround = Crafty.e("Background");






        // place PC in game
        _Player = Crafty.e("Player")
                .attr({
            x: 400
                    , y: 340
                    , w: 66
                    , h: 66
        });

        // Options to be used by player trail.
        var options = {
            maxParticles: 200,
            size: 20,
            sizeRandom: 0,
            speed: 30,
            speedRandom: 15,
            // Lifespan in frames
            lifeSpan: 30,
            lifeSpanRandom: 0,
            // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
            angle: 270,
            angleRandom: 0,
            startColour: [245, 221, 13, 1],
            startColourRandom: [0, 20, 0, 1],
            endColour: [245, 221, 13, .5],
            // Only applies when fastMode is off, specifies how sharp the gradients are drawn
            sharpness: 20,
            sharpnessRandom: 0,
            // Random spread from origin
            spread: 2,
            // How many frames should this last
            duration: -1,
            // Will draw squares instead of circle gradients
            fastMode: false,
            gravity: {x: -3, y: 0},
            // sensible values are 0-3
            jitter: 0
        };

        // Creates Player Trail
        /*
         _PlayerTrail = Crafty.e("2D,DOM,Particles").particles(options).attr({
         x: _Player.x
         , y: _Player.y + _Player.h - 30, z: 100
         })
         .bind("EnterFrame", function() {
         // changes trail's coords to match the PC everytime the game loop is called.
         this.x = _Player.x;
         this.y = _Player.y + _Player.h - 30;
         this.z = 100;
         });
         */

        enemy = Crafty.e("Other, Enemy");

        // Place ground in Level  
        ground = Crafty.e("Ground");

        // Place Finish line
        finishLine = Crafty.e("Finish")
                .attr({x: MAP_WIDTH - 200, y: 0})
                .css({"background-color": "none"});
    },
    /**
     * Generates the blocks for the player to dodge
     * @public
     * @param {int} numEnemies - number of enemies to add to the world
     */
    generateBlocks: function(numBlocks) {


        // grid block size 
        var segmentSize = (MAP_WIDTH - 500) / (numBlocks);

        // current Block X pos
        var currentBX = segmentSize;

        for (var i = 0; i < numBlocks; i++) {

            var block_width = 100 + Math.floor((Math.random() * 100));

            var offset_width = 50 + Math.floor(Math.random() * (segmentSize - block_width));


            var block_x = currentBX + offset_width + block_width;


            var block_object = Crafty.e("Block")
                    .attr({
                x: block_x     // Random Box location on map
                        , y: 400
                        , w: block_width  // Random box size between 100-200
                        , h: 50
            })
                    .css({"background-color": 'rgb(104, 184, 208)'});

            // set pastX
            currentBX += segmentSize;
            this._BlockObjects.push(block_object);

        }
        return this;
    },
    generateCoins: function(numCoins) {

        // grid block size 
        var segmentSize = (MAP_WIDTH - 500) / (numCoins);

        // current Block X pos
        var currentBX = segmentSize;

        // rewards
        for (var i = 0; i < numCoins; i++) {
            var coin_width = 50;

            var offset_width = 50 + Math.floor(Math.random() * (segmentSize - coin_width));


            var coin_x = currentBX + offset_width + coin_width;

            var reward_obj = Crafty.e("Reward")
                    .attr({
                x: coin_x    // Random Box location on map
                        , y: 300
                        , w: coin_width
                        , h: 50
            })
                    .css({"background-color": 'orange'});

            currentBX += segmentSize;
            // Add new box object and reward to object array
            this._CoinObjects.push(reward_obj);
        }
        return this;
        //this.adjustBlocks(); // will ensure proper obstaclel placement
    },
    /**
     * Generate the enemies that are chasing Ron
     * @public
     */
    generateEnemies: function(enemies) {
        // TODO: generate the enemies that chase PC
        // grid block size 
        var enemiesSize = (MAP_WIDTH - 500) / (enemies);

        var currentEnemy = enemiesSize;

        for (var i = 0; i < enemies; i++) {

            var enemy_width = 50 + Math.floor((Math.random() * 50));

            var offset_width = 50 + Math.floor(Math.random() * (enemiesSize - enemy_width));


            var enemy_x = currentEnemy + offset_width + enemy_width;

            var enemy = Crafty.e("FlamingEnemy").attr({x: enemy_x, w: enemy_width});
            currentEnemy += enemiesSize;

            this._EnemyObjects.push(enemy);
        }

        return this;
    }
});
