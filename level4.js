kaboom();

loadSprite("dino", "assets/dino.png");
loadSprite("jrbg", "assets/jrbg.jpg")

add([
    sprite("dino"),
    pos(80, 300),
    scale(0.25), 
  ]);

  add([
    sprite("jrbg", {width: width(), height: height()}),
    z(-2),
  ]);
// const k = kaboom({
//     global: true,
//     fullscreen: true,
//     scale: 1,
//     debug: true,
//   });
  
//   // Define game constants
//   const JUMP_FORCE = 700;
//   const FALL_DEATH_HEIGHT = 1200;
//   const GROUND_LEVEL = height() - 100;
  
//   // Load game assets
//   loadRoot("https://i.imgur.com/");
//   loadSprite("dino", "assets/dino.png");
//   loadSprite("cactus", "cactus.png");
  
//   // Define game objects and behavior
//   add([
//     sprite("dino"),
//     pos(80, GROUND_LEVEL),
//     body(),
//     "player",
//   ]);
  
//   add([
//     sprite("cactus"),
//     pos(width(), GROUND_LEVEL),
//     "obstacle",
//   ]);
  
//   keyPress("space", () => {
//     if (isPlayerOnGround()) {
//       jumpPlayer();
//     }
//   });
  
//   function jumpPlayer() {
//     play("jump.mp3");
//     get("player").jump(JUMP_FORCE);
//   }
  
//   function isPlayerOnGround() {
//     return get("player").pos.y >= GROUND_LEVEL;
//   }
  
//   function createObstacle() {
//     add([
//       sprite("cactus"),
//       pos(width(), GROUND_LEVEL),
//       origin("botleft"),
//       "obstacle",
//     ]);
//     wait(rand(1, 2), () => {
//       createObstacle();
//     });
//   }
  
//   createObstacle();
  
//   // Define game over behavior
//   action("player", (p) => {
//     if (p.pos.y >= FALL_DEATH_HEIGHT) {
//       go("gameover", score());
//     }
//   });
  
//   // Define collision behavior
//   collides("player", "obstacle", () => {
//     go("gameover", score());
//   });
  
//   // Define game over scene
//   scene("gameover", (score) => {
//     add([
//       text(`Score: ${score}`),
//       pos(width() / 2, height() / 2),
//       origin("center"),
//     ]);
//   });
  
//   // Start the game
//   go("main");