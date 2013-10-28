
// Player

Crafty.c("Player", function(){

});

// All other components that exist in the planet of this game. 

Crafty.c("Other", {
	init: function(){
		this.bind("EnterFrame", function(){
			this.x -= GAME_SPEED;
		});
	}
});

// The ground component

Crafty.c("Ground", {
	_xPos: 0,
	_yPos: 460,
	_width: MAP_WIDTH,
	_height: 20,
	init: function(){
			this.x = this._xPos;
			this.y = this._yPos;
			this.w = this._width;
			this.h = this._height;
			this.css({"background-color": 'rgb(255,255,255)'})
	}
});

Crafty.c("ParticleTrail", {
	generateTrail: function(){
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
			gravity: { x: -2, y: 0 },
			// sensible values are 0-3
			jitter: 2
		}
		this.requires("Particles").particles(options);
		return this;
	}
});


// Level Generator

Crafty.c("Level", {
	init: function(){
	
		// place PC in game
		player_character = Crafty.e("2D, DOM, Twoway, Player, Collision, Gravity, ParticleTrail")
          .attr({
            x: 400
            , y: 400 
            , w: 100
            , h: 100
          })
          .css({
            "background-color": 'rgb(163,205,57)'
          })
          .generateTrail()
          .gravity("Ground")
          .gravityConst(GRAVITY)
          .twoway(0,10);
        
        
        // Place ground in Level  
        ground = Crafty.e("2D, DOM, Other, Ground");
	},
	
	// Generate the blocks for the player to dodge
	generateObjects: function(numEnemies){
		for(var i = 0; i< numEnemies; i++){
			Crafty.e("2D, DOM, Other")
	    	.attr({
				x: 100 * (i*Math.random()*200)
		  		, y: 120 
		  		, w: 100
				, h: 100
			})
			.css({"background-color": 'rgb(251,172,29)'});
		}
	},
	
	// Generate the enemies that are chasing Ron
	generateEnemies: function(){
		
	}
});