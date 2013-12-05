Crafty.scene("Menu", function() {
	Crafty.background('url(images/main-menu-bg.png)');
    Crafty.e("2D, DOM, Color, Mouse")
            .attr({w: 110, h: 50, x: 342, y: 310})
            .css({"cursor": "pointer"})
            .bind("Click", function() {
        Crafty.scene("Game");
    });

});

Crafty.scene("Game", function() {

    // Add Constant background
    Crafty.background('url(images/city-bg2.png)');
	
	
	var lParams = levelVarGenerator(_CurrentLevel);
	
    // Generate Level 1
    _Level = Crafty.e("Level").generateBlocks(lParams[0]).generateCoins(lParams[1]).generateEnemies(lParams[0]);


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
	    // Add Constant background
    Crafty.background('url(images/city-bg2.png)');
    Crafty.e("2D, DOM, Text").attr({ x: 100, y: 100 })
    	.text("You Lost. sucks. ").css({"font-size": "40px", "color":"white"});
    
});

function levelVarGenerator(level){
	return [20+((level+1)*1.5), 100/(1.5*level)];
}
