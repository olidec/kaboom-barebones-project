kaboom();


loadSprite("blbg", "assets/blbg.png");
loadSprite("monkey1", "assets/monkey1.png");
loadSprite("monkey2", "assets/monkey2.png");
loadSprite("monkey3", "assets/monkey3.png");
loadSprite("balloon", "assets/egg1.png");
loadSprite("blbg", "assets/blbg.png");

  add([
    sprite("blbg", {width: width(), height: height()}),
    z(-2),
  ]);

  const balloon = add([
    sprite("balloon"),
    pos(-50,100),
    scale(0.15),

  ]);

  add([
    sprite("monkey3"),
    pos(1050,60),
    scale(0.30),
    area(),
    "monkey3"
  ])
  add([
    sprite("monkey2"),
    pos(1082,235),
    scale(0.15),
    area(),
    "monkey2"
  ])
  add([
    sprite("monkey1"),
    pos(1051,380),
    scale(0.15),
    area(),
    "monkey1"
  ])

  onClick("monkey3", (monkey) =>  add([
    sprite("monkey3"),
    pos(600,60),
    scale(0.30),
  ]))

  onClick("monkey2", (monkey) =>  add([
    sprite("monkey2"),
    pos(630,235),
    scale(0.15),
  ]))

  onClick("monkey1", (monkey) =>  add([
    sprite("monkey1"),
    pos(600,380),
    scale(0.15),
  ]))



// Define game object
// const myObject = add([
//   sprite("balloon"),
//   pos(width() / 2, height() / 2),
//   origin("center"),
//   scale(0.15),
// ]);

// Define game variables
let angle = 0;
const radius = 100;
const speed = 0.5;

// Define game loop function
action("balloon", (obj) => {
  angle += dt() * speed;
  balloon.pos = vec2(width() / 2, height() / 2).addWithAngle(angle, radius);
});





  // onKeyDown("space", () =>  {

//  if(balloon.pos.x>150 && balloon.pos.y<800) {
//   balloon.move(0,500);
// }
// if(balloon.pos.x<2500 && balloon.pos.y<500) {
//   balloon.move(-200,0);
// }
// if(balloon.pos.x<2500 && balloon.pos.y<500) {
//   balloon.move(-200,0);
// }
// if(balloon.pos.x<2500 && balloon.pos.y<500) {
//   balloon.move(-200,0);
// }
// if(balloon.pos.x<2500 && balloon.pos.y<500) {
//   balloon.move(-200,0);
// }
// if(balloon.pos.x<2500 && balloon.pos.y<500) {
// //   balloon.move(-200,0);
// }
  // })
  
//   scene("gameover", () => {
//     add([
//       text("Game Over\n" + "Score:" + score),
//       pos(420,200),
  
//     ])
  
//   onKeyPress("space", () => {
//       go("game")
//     })
//   })

  // action("Object", (Object) =>{
  //   if (Object.passed == false && Object.pos.x < dino.pos.x) {
  //     Object.passed = true
  //     score += 1
  //     score_count.text = score
  //   }
  //   Object.move(-300, 0)
  // })


 