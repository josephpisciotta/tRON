Crafty.c("Player", function(){
	
});

Crafty.c("Other", {
	init: function(){
		this.bind("EnterFrame", function(){
			this.x -= GAME_SPEED;
		});
	}
});

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

Crafty.c("Level", {
	init: function(){
		player1 = Crafty.e("2D, DOM, Twoway, Player, Collision, Gravity")
          .attr({
            x: 100
            , y: 400 
            , w: 100
            , h: 100
          })
          .css({
            "background-color": 'rgb(163,205,57)'
          })
          .gravity("Ground")
          .gravityConst(GRAVITY)
          .twoway(5);
          
        ground = Crafty.e("2D, DOM, Other, Ground");
	},
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
	generateGround: function(){
		
	}
});