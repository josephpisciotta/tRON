// UI Components
Crafty.c("Button", {
	
});

<<<<<<< HEAD
Crafty.sprite("images/tRON.png"), {tron: [0, 0, 68, 45]};
// Player

Crafty.c("Player", function() {
=======

// Player
Crafty.sprite(67,"images/tRON.png", {player:[0,0]});

Crafty.c("Player", {
	init: function(){
	
		// Load required things
		this.requires("2D, DOM, SpriteAnimation");
		this.requires("Multiway, Gravity, Collision");
		this.requires("Keyboard, PlayerTrail, player, SpriteAnimation, Text");
		
		// Set up controlls, gravity, ground interaction
		this.multiway(10,{UP_ARROW:-90, DOWN_ARROW:90})
			//.generateTrail()
			.gravity("Other")
			.gravityConst(GRAVITY)
			.onHit("Other", this.stopFalling);
        
        // player state animations
		this.animate("PlayerUp",[[1,0],[0,0]])
			.animate("PlayerNormal",[[0,0]]);
			
		// Activate animation for up and normal based on movement
		// Will also need Key Event listener for the down arrow as 
		// the player never really moves
		this.bind('NewDirection', function (data) {
		
			// Y axis negative change means up
			if(data.y < 0){
				this.animate("PlayerUp", 15, 0);
			}
            else{
	            this.animate("PlayerNormal", 1, 1);
            } 
            
        });
        
	},
	stopFalling: function(){
		this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
	}
>>>>>>> nightly
});

// All other components that exist in the planet of this game. 

Crafty.c("Other", {
<<<<<<< HEAD
    init: function() {
        this.bind("EnterFrame", function() {
            this.x -= GAME_SPEED;
        });
    }
=======
	init: function(){
		this.bind("EnterFrame", function(){
			this.x -= GAME_SPEED;
		});
	},
	stopMovement: function(){
		this.x += GAME_SPEED;
		return this;	
	}
});

Crafty.c("Block", {
	init: function(){
		this.requires("Collision");
		this.onHit("Player", function(){
			var others = Crafty("Other");
			for( var i = 0; i< others.length; i++){
				
				Crafty(others[i]).stopMovement();
			}
		});
	}
>>>>>>> nightly
});

// Enemy
// All things that slow him down when hit or kill him will be an enemy
Crafty.c("Enemy", {
	
});


// The ground component

Crafty.c("Ground", {
    _xPos: 0,
    _yPos: 460,
    _width: MAP_WIDTH,
    _height: 20,
    init: function() {
        this.x = this._xPos;
        this.y = this._yPos;
        this.w = this._width;
        this.h = this._height;
        this.css({"background-color": 'rgb(255,255,255)'});
    }
});


// Trail behind player and enemies

Crafty.c("PlayerTrail", {
<<<<<<< HEAD
    generateTrail: function() {
        var options = {
            maxParticles: 200,
            size: 100,
            sizeRandom: 2,
            speed: 30,
            speedRandom: 0,
            // Lifespan in frames
            lifeSpan: 40,
            lifeSpanRandom: 0,
            // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
            angle: 270,
            angleRandom: 0,
            startColour: [0, 200, 0, 1],
            startColourRandom: [0, 0, 0, 1],
            // Only applies when fastMode is off, specifies how sharp the gradients are drawn
            sharpness: 20,
            sharpnessRandom: 0,
            // Random spread from origin
            spread: 2,
            // How many frames should this last
            duration: -1,
            // Will draw squares instead of circle gradients
            fastMode: false,
            gravity: {x: -2, y: 0},
            // sensible values are 0-3
            jitter: 2
        };
        this.requires("Particles").particles(options);
        return this;
    }
=======
	generateTrail: function(){
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
			startColour: [0, 200, 0, 1],
			startColourRandom: [0, 20, 0, 1],
			endColour: [0, 200, 0, 1],
			// Only applies when fastMode is off, specifies how sharp the gradients are drawn
			sharpness: 20,
			sharpnessRandom: 0,
			// Random spread from origin
			spread: 2,
			// How many frames should this last
			duration: -1,
			// Will draw squares instead of circle gradients
			fastMode: false,
			gravity: { x: -3, y: 0 },
			// sensible values are 0-3
			jitter: 0
		}
		
		return this;
	}
>>>>>>> nightly
});


// Level Generator

Crafty.c("Level", {
<<<<<<< HEAD
    init: function() {

        // place PC in game
        player_character = Crafty.e("2D, DOM, Twoway, Player, Collision, Gravity, PlayerTrail, tron")
                .attr({
            x: 400
                    , y: 400
                    , w: 68
                    , h: 55
        })
                .css({
            "background-image": "url(images/tRON.png)"
        })
                .generateTrail()
                .gravity("Ground")
                .gravityConst(GRAVITY)
                .twoway(0, 10);


        // Place ground in Level  
        ground = Crafty.e("2D, DOM, Other, Ground");
    },
    // Generate the blocks for the player to dodge
    generateObjects: function(numEnemies) {
        for (var i = 0; i < numEnemies; i++) {
            Crafty.e("2D, DOM, Other")
                    .attr({
                x: (i * Math.random() * 200)
                        , y: 120
                        , w: 100
                        , h: 100
            })
                    .css({"background-color": 'rgb(251,172,29)'});
        }
    },
    // Generate the enemies that are chasing Ron
    generateEnemies: function() {

    }
=======

	_Objects: new Array(),
	init: function(){
	
		// place PC in game
		player_character = Crafty.e("Player")
          .attr({
            x: 400
            , y: 340 
            , w: 66
            , h: 66
          });
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
			startColour: [245,221,13, 1],
			startColourRandom: [0, 20, 0, 1],
			endColour: [245,221,13, .5],
			// Only applies when fastMode is off, specifies how sharp the gradients are drawn
			sharpness: 20,
			sharpnessRandom: 0,
			// Random spread from origin
			spread: 2,
			// How many frames should this last
			duration: -1,
			// Will draw squares instead of circle gradients
			fastMode: false,
			gravity: { x: -3, y: 0 },
			// sensible values are 0-3
			jitter: 0
		}
        Crafty.e("2D,DOM,Particles").particles(options).attr({
			x:player_character.x
			,y: player_character.y+player_character.h-30})
			.bind("EnterFrame", function(){
				this.x = player_character.x;
				this.y = player_character.y+player_character.h-30;
			});
        
        
        // Place ground in Level  
        ground = Crafty.e("2D, DOM, Other, Ground");
	},
	
	// Generate the blocks for the player to dodge
	generateObjects: function(numEnemies){
		for(var i = 0; i< numEnemies; i++){
					
			var new_object = Crafty.e("2D, DOM, Other, Enemy, Block")
	    		.attr({
					x: (Math.random()*MAP_WIDTH)
			  		, y: 400 
			  		, w: 100 + (Math.random()*100)
					, h: 50
				})
				.css({"background-color": 'rgb(104, 184, 208)'});
			this._Objects.push(new_object);
			
		}
		//this.adjustObjects();
	},
	
	// Generate the enemies that are chasing Ron
	generateEnemies: function(){
		
	}
>>>>>>> nightly
});