Crafty.scene("Menu", function() {
	Crafty.background('url(images/main-menu-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
			.image("images/playUp.png")
			.attr({w: 50, h: 50, x: 320, y: 300})
            //.attr({w: 110, h: 50, x: 342, y: 310})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
				Crafty.scene("Game");
			});
	Crafty.e("2D, DOM, Color, Mouse, Image")
	var imageMask = Crafty.e("2D, DOM, Color, Mouse, Image")      
			.image("images/instruction.png")
			.attr({w: 200, h: 50, x: 200, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
				imageMask.image("images/instruction2.png")
			})
			.bind("MouseOut", function(e) {
				this.image("images/instruction.png")
			})
			.bind("Click", function() {
				Crafty.scene("InstructionScene")
			});
	Crafty.e("2D, DOM, Color, Mouse, Image") 
	var imageMask2 = Crafty.e("2D, DOM, Color, Mouse, Image")      
			.image("images/about.png")
			.attr({w: 200, h: 50, x: 370, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
				imageMask2.image("images/about2.png")
			})
			.bind("MouseOut", function(e) {
				this.image("images/about.png")
			})
			.bind("Click", function() {
				Crafty.scene("AboutScene")
			});
	Crafty.e("2D, DOM, Color, Mouse, Image") 
	var imageMask3 = Crafty.e("2D, DOM, Color, Mouse, Image")     
			.image("images/highscores.png")
			.attr({w: 200, h: 50, x: 480, y: 400})
            .css({"cursor": "pointer"})
            .bind("MouseOver", function(e) {
				imageMask3.image("images/highscores2.png")
			})
			.bind("MouseOut", function(e) {
				this.image("images/highscores.png")
			})
			.bind("Click", function() {
				Crafty.scene("HighscoreScene")
			});			
});

Crafty.scene("InstructionScene", function() {
	Crafty.background('url(images/instructions.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
			//.image("images/playUp.png")
			//.attr({w: 50, h: 50, x: 320, y: 300})
            //.attr({w: 110, h: 50, x: 342, y: 310})
            //.css({"cursor": "pointer"})
            //.bind("Click", function() {
			//	Crafty.scene("Game");
			//});
});

Crafty.scene("AboutScene", function() {
	Crafty.background('url(images/about.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
			//.image("images/playUp.png")
			//.attr({w: 50, h: 50, x: 320, y: 300})
            //.attr({w: 110, h: 50, x: 342, y: 310})
            //.css({"cursor": "pointer"})
            //.bind("Click", function() {
			//	Crafty.scene("Game");
			//});
});

Crafty.scene("HighscoreScene", function() {
	Crafty.background('url(images/highscore.png)');
    Crafty.e("2D, DOM, Color, Mouse, Image")
			//.image("images/playUp.png")
			//.attr({w: 50, h: 50, x: 320, y: 300})
            //.attr({w: 110, h: 50, x: 342, y: 310})
            //.css({"cursor": "pointer"})
            //.bind("Click", function() {
			//	Crafty.scene("Game");
			//});
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
        
        
    // progress bar
    _ProgressBar = Crafty.e("2D, DOM, ProgressBar")
                .attr({x: 20, y: 150, w: 25, h: 100, z: 100})
                .progressBar(_TimeQuantum, true, "blue", "green");


});

				

Crafty.scene("FinishScene", function(){
	    // Add Constant background
    Crafty.background('url(images/city-bg2.png)');
    Crafty.e("2D, DOM, Text").attr({ x: 100, y: 100 }).text("You Won!!").css({"font-size": "40px", "color":"white"});
    _ScoreEntity = Crafty.e("Score, 2D, DOM, Text").attr({
        x: Crafty.viewport.width - 120,
        y: 25,
        w: 200,
        h: 50}).css({color: "#fff"}).text(function(){return "Score: " + _ScoreEntity.getScore();});
});

Crafty.scene("DeathScene", function(){
	   Crafty.background('url(images/instructions.png)');
	   Crafty.e("2D, DOM, Color, Mouse")
	   		.attr({w: 110, h: 50, x: 342, y: 300})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
				Crafty.scene("Menu");
			}); 
});



function levelVarGenerator(level){
	return [25, 100, 10];
}
