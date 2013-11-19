// General Game Variables such as speed, gravity, difficulty
var GRAVITY = .5;
var GAME_SPEED = 10;

// Map Length (May take this out in favor of this being changed dynamically)
var MAP_WIDTH = 20000;

// Game Screen Size
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 500;

// Image URIs
var CHARACTER_MAP_URI = "";
var BACKGROUND_IMAGE_URI = "";
var GENERAL_IMAGE_MAP_URI = "";


// Location of 1 Saved Game
var SAVED_GAME = null;


// Global Variables
var _ScoreEntity = null;
var _PausePlayButton = null;
var _Level1 = null;
var _ProgressBar = null;
var _Player = null;
var _PlayerTrail = null;
var _TimeQuantum = 20000;
var _Time = 0;
var _Background = null;