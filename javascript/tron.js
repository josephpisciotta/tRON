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

        Crafty.background('url(images/main-menu-bg.png)');
<<<<<<< HEAD
        

		
=======

>>>>>>> a1bf108c6d17100fe82dd3f750d7eb26762172b6
        Crafty.scene("Menu");
    }
};

Crafty.scene("Menu", function() {
    Crafty.e("2D, DOM, Color, Mouse")
            .attr({w: 110, h: 50, x: 342, y: 310})
<<<<<<< HEAD
=======
            .css({"cursor": "pointer"})
>>>>>>> a1bf108c6d17100fe82dd3f750d7eb26762172b6
            .bind("Click", function() {
        Crafty.scene("Game");
    });

});

Crafty.scene("Game", function() {

    Crafty.background('url(images/city-bg.png)');

    level1 = Crafty.e("Level").generateObjects(10);


    // UI
    Crafty.e("2D, DOM, Color, Mouse")
            .color("red")
<<<<<<< HEAD
=======
            .css({"cursor": "pointer"})
>>>>>>> a1bf108c6d17100fe82dd3f750d7eb26762172b6
            .attr({w: 100, h: 100, paused: false})
            .bind("Click", function() {
        if (this.isPaused) {
            Crafty.c();
        }
        else {
            Crafty.pause();
        }
    });
});