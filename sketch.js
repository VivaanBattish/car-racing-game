var form,player,game;
var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var c1,c2,c3,c4;
var cars;
var r_car,w_car,bl_car,b_car;
var ground,track;

function preload(){
   w_car = loadImage("images/car1.png");
   r_car = loadImage("images/car2.png");
   b_car = loadImage("images/car3.png");
   bl_car = loadImage("images/car4.png");
   track = loadImage("images/track.jpg");
   ground = loadImage("images/ground.png");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-100,displayHeight-150);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
   
  if(gameState === 2){
    game.end();
  }
   
  
}
