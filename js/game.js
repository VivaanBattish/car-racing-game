class Game{
    constructor(){

    }
  getState(){
      var gameStateref = database.ref("gameState");
      gameStateref.on("value",function(data){
          gameState = data.val();
      })
  }
  update(State){
      database.ref("/").update({
         gameState: State,
      })
  }
 async start(){
      if (gameState === 0){
          player = new Player();
          var playerCountref = await database.ref("playerCount").once("value");
          if(playerCountref.exists()){
                 playerCount = playerCountref.val();
                 player.getCount();
          }
          form = new Form();
          form.display();
          c1 = createSprite(250,200);
          c1.addImage(b_car);

          c2 = createSprite(450,200);
          c2.addImage(r_car);

          c3 = createSprite(650,200);
          c3.addImage(bl_car);

          c4 = createSprite(850,200);
          c4.addImage(w_car);

          cars = [c1,c2,c3,c4];
      }
  }
  play(){
      player.carsE();
      background(ground);
      form.Hide();  
      textSize(40);
    //  text("GAME START!!",120,90);
      Player.getplayerinfo();
      if(allPlayers !== undefined){
          var displayPosition = 150;
          var x = 180;
          var y = 80;
          var Index = 0;

          image(track,0,-displayHeight*4,displayWidth-100,displayHeight*5);

          for(var plr in allPlayers){
              //displayPosition+= 50;
              //textSize(30);
              x = x+225;
              y = displayHeight-150 - allPlayers[plr].distance;
              cars[Index].x = x;
              cars[Index].y = y;

              if(plr === "player"+player.index){
                  fill("green");
                  cars[Index].shapeColor = "green";
                  camera.position.x = (displayWidth - 100)/2;
                  camera.position.y = y;
                  ellipseMode(RADIUS);
                  ellipse(x,y,60,60);

                 // console.log(player.rank);

              }
              /*
              else{
                  fill("black");
              }
              text(allPlayers[plr].name+": "+allPlayers[plr].distance,100,displayPosition);  
              */
             Index++;             
          }
      }
      if(keyDown("UP_ARROW") && player.index !== null){
           player.distance+=10;
           player.update();
      }
       
      if(player.distance > 4050){
          gameState = 2;
          player.rank+= 1;
          Player.updateC(player.rank);
      }

    
      drawSprites();
  }

  end(){
      console.log("end");
      console.log(player.rank);
  }
}
