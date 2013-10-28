Game = {
  // This defines our grid's size and the size of each of its tiles
  map_grid: {
    width:  600,
    height: 400,
    tile: {
      width:  1,
      height: 1
    }
  },
 
  // The total width of the game screen. Since our grid takes up the entire screen
  //  this is just the width of a tile times the width of the grid
  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },
 
  // The total height of the game screen. Since our grid takes up the entire screen
  //  this is just the height of a tile times the height of the grid
  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },
 
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(Game.width(), Game.height());
    Crafty.background('rgb(249, 108, 30)');
    
    Crafty.scene("Intro");
  }
}

Crafty.scene("Intro", function(){
    player2 = Crafty.e("2D, DOM")
    	.attr({
			x: 250
	  		, y: 120 
	  		, w: 100
			, h: 100
		})
		.css({"background-color": 'rgb(251,172,29)'})
		.bind('EnterFrame',function(){
			this.x -= 10;
		});
	
	player1 = Crafty.e("2D, DOM, Multiway")
          .attr({
            x: 100
            , y: 120 
            , w: 100
            , h: 100
          })
          .css({
            "background-color": 'rgb(163,205,57)'
          })
          .multiway({x:15,y:0}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
          
	Crafty.viewport.follow(player1, -100, -100);
});