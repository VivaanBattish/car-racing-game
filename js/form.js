class Form{
    constructor(){
      this.input = createInput("Name");
      this.button = createButton("PLAY");
      this.greet = createElement("h3");
      this.reset = createButton("RESET");
    }
 display(){
    var title = createElement("h2");
    title.html("CAR RACING GAME");
    title.position(120,10);
    
    this.reset.position(displayWidth-100,displayHeight-150);
    
    this.input.position(displayWidth/4,displayHeight/4-40);
   
    this.button.position(displayWidth/4-45,displayHeight/4-40);

    // => function binds the real object to the code block 
  this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     player.name = this.input.value();
     playerCount+=1;
    player.index = playerCount;
     player.update(); 
     player.updateCount(playerCount);
     this.greet.html("WELCOME "+ player.name);
     this.greet.position(200,200);
  })
  this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    Player.updateC(0);
  })
  }
  Hide(){
    this.greet.hide();
    this.input.hide();
    this.button.hide();

  }
      
  
}