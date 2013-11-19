Game = {
    // This defines our grid's size and the size of each of its tiles
    map_grid: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        tile: {
            width: 1,
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
<<<<<<< HEAD
        
        Crafty.background("url(images/main-menu-bg.png)");
=======

        Crafty.background('url(images/main-menu-bg.png)');

<<<<<<< HEAD
		
>>>>>>> nightly
=======


>>>>>>> nightly

        Crafty.scene("Menu");
    }
};

Crafty.scene("Menu", function() {
    Crafty.e("2D, DOM, Color, Mouse")
            .attr({w: 110, h: 50, x: 342, y: 310})
<<<<<<< HEAD
            .bind("Click", function() {
        Crafty.scene("Game");
    });
=======
            .css({"cursor": "pointer"})
            .bind("Click", function() {
<<<<<<< HEAD
				Crafty.scene("Game");
			});
>>>>>>> nightly
=======
        Crafty.scene("Game");
    });
>>>>>>> nightly

});

Crafty.scene("Game", function() {

<<<<<<< HEAD
<<<<<<< HEAD
    Crafty.background("url(images/city-bg.png)");
=======
    Crafty.background('url(images/city-bg.png)');

>>>>>>> nightly
    level1 = Crafty.e("Level").generateObjects(10);
=======
    // Add Constant background
    Crafty.background('url(images/city-bg.png)');

>>>>>>> nightly

    // Generate Level 1
    _Level1 = Crafty.e("Level").generateObjects(10);

<<<<<<< HEAD
    // UI
<<<<<<< HEAD
    Crafty.e("2D, DOM, Color, Mouse")
            .color("red")
            .attr({w: 100, h: 100, paused: false})
            .bind("Click", function() {
        if (this.isPaused) {
            Crafty.c();
        }
        else {
            Crafty.pause();
        }
    });
=======
    var pausePlay = Crafty.e("2D, DOM, Color, Mouse, Image")
=======

    // UI - pause button. will be modifying in the future
    _PausePlayButton = Crafty.e("2D, DOM, Color, Mouse, Image")
>>>>>>> nightly
            .css({"cursor": "pointer"})
            .image("images/pause.png")
            .attr({w: 100, h: 100, paused: false})
            .bind("Click", function() {
<<<<<<< HEAD
		        if (this.isPaused) {
		            Crafty.c();
		        }
		        else {
		            Crafty.pause();
		        }
			});
			
>>>>>>> nightly
=======
        if (this.isPaused) {
            Crafty.c();
        }
        else {
            Crafty.pause();
        }
    });

    // score
    _ScoreEntity = Crafty.e("Score, 2D, DOM, Text").attr({
        x: Crafty.viewport.width - 120,
        y: 25,
        w: 200,
        h: 50}).css({color: "#fff"}).text("Score: 0");

>>>>>>> nightly
});