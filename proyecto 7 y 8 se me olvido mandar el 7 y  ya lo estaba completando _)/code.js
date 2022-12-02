var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle= createSprite(172,369,50,10);
    playerPaddle.shapeColor="#B1EDE8";
    var computerPaddle= createSprite(172,20,50,10);
    computerPaddle.shapeColor="#6D435A";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="#FF6978";
           var canchaplayer = createSprite(172,399,100,10);
        canchaplayer.shapeColor="#6D435A";
        var canchacomputer=createSprite(172,3,100,10);
        canchacomputer.shapeColor="#B1EDE8";
        
        var score1=0;
        var score2=0;
        var gameState ="serve";
        
    
function draw() {
  background("#352D39");
  // texto jugador
  textSize(15);
  stroke("#ED254E");
  text(+score1,2,216);
  // texto computer
  textSize(15);
  stroke("#ED254E");
  text(+score2,2,163);
  
   //estadosa
    
    if(gameState == "serve")
  {
    //mostrar texto de bienida
     textSize(17);
    text("¡Bienvenido! Presiona espacio para comenzar.",30,200);
    
     // velocidad y tecladeinicio
  if(keyDown("space")){
    ball.velocityX = 9;
    ball.velocityY = 10;
    gameState="play";
  }
    
  
  }
  
   if(gameState == "play")
  {
    //Mover la paleta con las flechas
   if (keyDown("LEFT_ARROW")) {
    playerPaddle.x=playerPaddle.x-10;
  } 
  if (keyDown("RIGHT_ARROW")) {
    playerPaddle.x=playerPaddle.x+10;
  }
 
    computerPaddle.x=ball.x;
  
    if( score1 ==5 ||score2 ==5)
    {
      gameState="end";
    }
  }
  
  if(gameState == "end")
  {
     ball.velocityX = 0;
    ball.velocityY = 0;
    //mostrar texto de fin 
     textSize(17);
    text("Fin del juego.",30,200);
    ball=(200,200,10,10);
    
  }
  
  if (keyDown("LEFT_ARROW")) {
    playerPaddle.x=playerPaddle.x-10;
  } 
  if (keyDown("RIGHT_ARROW")) {
    playerPaddle.x=playerPaddle.x+10;
  }
 
    computerPaddle.x=ball.x;
    drawnet();

 
  
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  if(ball.isTouching(canchaplayer)){
    score2=score2 +1;
    
  }
   if(ball.isTouching(canchacomputer)){
    score1=score1 +1;
    
  }
  
  drawSprites();
  
}
 
  


function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(num,200,num,200);
  }
}





  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
