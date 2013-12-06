Crafty.scene("Menu", function() {
    Crafty.background('url(images/main-menu-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var buttonImage = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/playUp.png")
            .attr({w: 168, h: 54, x: 320, y: 309})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
        buttonImage.image("images/playDown.png");
    })
            .bind("MouseOut", function(e) {
        this.image("images/playUp.png");
    })
            .bind("Click", function() {
        Crafty.scene("Game");
    });
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var imageMask = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/instruction.png")
            .attr({w: 200, h: 50, x: 200, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
        imageMask.image("images/instruction2.png");
    })
            .bind("MouseOut", function(e) {
        this.image("images/instruction.png");
    })
            .bind("Click", function() {
        Crafty.scene("InstructionScene");
    });
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var imageMask2 = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/about.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
        imageMask2.image("images/about2.png");
    })
            .bind("MouseOut", function(e) {
        this.image("images/about.png");
    })
            .bind("Click", function() {
        Crafty.scene("AboutScene");
    });
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var imageMask3 = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/highscores.png")
            .attr({w: 200, h: 50, x: 480, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
        imageMask3.image("images/highscores2.png");
    })
            .bind("MouseOut", function(e) {
        this.image("images/highscores.png");
    })
            .bind("Click", function() {
        Crafty.scene("HighscoreScene");
    });
});

Crafty.scene("InstructionScene", function() {
    Crafty.background('url(images/instructions-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/backButton.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
        Crafty.scene("Menu");
    });
});

Crafty.scene("AboutScene", function() {
    Crafty.background('url(images/about-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var imageMask3 = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/backButton.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
        Crafty.scene("Menu");
    });
});

Crafty.scene("HighscoreScene", function() {
    Crafty.background('url(images/highscores-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image");
    var imageMask4 = Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/backButton.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
        Crafty.scene("Menu");
    });
});


Crafty.scene("Game", function() {

    // Add Constant background
    Crafty.background('url(images/city-bg2.png)');


    var lParams = levelVarGenerator(_CurrentLevel);

    // Generate Level 1
    _Level = Crafty.e("Level").generateBlocks(lParams[0]).generateCoins(lParams[1]).generateEnemies(lParams[2]);


    // UI - pause button. will be modifying in the future
    _PausePlayButton = Crafty.e("2D, DOM, Color, Mouse, Image")
            .css({"cursor": "pointer"})
            .image("images/pause.png")
            .attr({w: 100, h: 100, paused: false})
            .bind("Click", function() {
        if (this.isPaused) {
<<<<<<< HEAD
        	//_PauseMenu.destroy();
            Crafty.c();
        }
        else {
        	//_PauseMenu = Crafty.e("PauseMenu").attr({x:200,y:200, w:100, h:300});
=======
            _PauseMenu.destroy();
            Crafty.c();
        }
        else {
            _PauseMenu = Crafty.e("PauseMenu").attr({x: 200, y: 200});
>>>>>>> 477c63335ee22678e2c9a23a28393b83e43e02fa
            Crafty.pause();
        }
    });

    // score
    _ScoreEntity = Crafty.e("Score, 2D, DOM, Text").attr({
        x: (Crafty.viewport.width / 2),
        y: 25,
        w: 200,
        h: 50}).css({color: "#fff", "font-size": "20px", "font-family": "Helvetica, arial, sans-serif"}).text("0");


    // progress bar
    _ProgressBar = Crafty.e("2D, DOM, ProgressBar")
            .attr({x: 10, y: 150, w: 25, h: 100, z: 100})
            .progressBar(_TimeQuantum, true, "rgb(55,110,124)", "green");
    _CoinsInARowBar = Crafty.e("2D, DOM, ProgressBar")
<<<<<<< HEAD
                .attr({x: 35, y: 150, w: 25, h: 100, z: 100})
                .progressBar(_CoinsForBonus, true, "rgb(55,110,124)", "blue");
=======
            .attr({x: 35, y: 150, w: 25, h: 100, z: 100})
            .progressBar(_CoinsForBonus, true, "rgb(55,110,124)", "green");
>>>>>>> 477c63335ee22678e2c9a23a28393b83e43e02fa
});



Crafty.scene("FinishScene", function() {
    // Add Constant background
    Crafty.background('url(images/finish-bg.png)');
    /*Crafty.e("2D, DOM, Text").attr({ x: 100, y: 100 }).text("You Won!!").css({"font-size": "40px", "color":"white"});
<<<<<<< HEAD
    _ScoreEntity = Crafty.e("Score, 2D, DOM, Text").attr({
        x: Crafty.viewport.width - 120,
        y: 25,
        w: 200,
        h: 50}).css({color: "#fff"}).text(function(){return "Score: " + _ScoreEntity.getScore();
		});*/
	Crafty.e("2D, DOM, Color, Mouse, Image")     
		.image("images/nextLevelButton.png")
		.attr({w: 200, h: 50, x: 370, y: 400})
        .css({"cursor": "pointer"})
		.bind("Click", function() {
			_CurrentLevel++;
			Crafty.scene("Game")
		});
	Crafty.e("Score, 2D, DOM, Text").attr({
        x: (Crafty.viewport.width/2) - 50,
        y: 300,
        w: 200,
        h: 50}).css({color: "#fff", "font-size":"20px", "font-family":"Helvetica, arial, sans-serif"}).text("Next Level: " + (_CurrentLevel + 1));
     Crafty.e("Score, 2D, DOM, Text").attr({
        x: (Crafty.viewport.width/2) - 50,
        y: 350,
        w: 200,
        h: 50}).css({color: "#fff", "font-size":"20px", "font-family":"Helvetica, arial, sans-serif"}).text("Score: " + (_ScoreEntity.getScore()));
=======
     _ScoreEntity = Crafty.e("Score, 2D, DOM, Text").attr({
     x: Crafty.viewport.width - 120,
     y: 25,
     w: 200,
     h: 50}).css({color: "#fff"}).text(function(){return "Score: " + _ScoreEntity.getScore();
     });*/
    Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/nextLevelButton.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
        Crafty.scene("Menu");
    });

>>>>>>> 477c63335ee22678e2c9a23a28393b83e43e02fa
});

//death
Crafty.scene("DeathScene", function() {


    // play sound for dying
    Crafty.audio.add("death", "media/sounds/explode.ogg");
    Crafty.audio.play("death");

    Crafty.background('url(images/death-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
            .image("images/mainMenuButton.png")
            .attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
<<<<<<< HEAD
			.bind("Click", function() {
				Crafty.scene("Menu")
			});
	Crafty.e("Score, 2D, DOM, Text").attr({
        x: (Crafty.viewport.width/2) - 50,
        y: 300,
        w: 200,
        h: 50}).css({color: "#fff", "font-size":"20px", "font-family":"Helvetica, arial, sans-serif"}).text("Current Level: " + (_CurrentLevel));
        Crafty.e("Score, 2D, DOM, Text").attr({
        x: (Crafty.viewport.width/2) - 50,
        y: 350,
        w: 200,
        h: 50}).css({color: "#fff", "font-size":"20px", "font-family":"Helvetica, arial, sans-serif"}).text("Score: " + (_ScoreEntity.getScore()));
=======
            .bind("Click", function() {

        // kill background music
        Crafty.audio.stop();
        Crafty.scene("Menu");
    });
>>>>>>> 477c63335ee22678e2c9a23a28393b83e43e02fa
});


function levelVarGenerator(level){
	return [10*level, 100/level, level*3];
}
