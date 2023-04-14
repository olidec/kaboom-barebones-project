kaboom();

loadSprite("dino", "assets/dino.png");
loadSprite("bg2", "assets/bg2.png");
loadSprite("nugget1", "assets/nugget1.png");
loadSprite("nugget2", "assets/nugget2.png");
loadSprite("nugget3", "assets/nugget3.png");
loadSprite("burntNugget1", "assets/burntNugget1.png");
loadSprite("burntNugget2", "assets/burntNugget2.png");
loadSprite("burntNugget3", "assets/burntNugget3.png");

   add([
    sprite("bg2", {width: width(), height: height()}),
    z(-2),
  ]);

  const box = add([
    rect(600, 300),
    pos(350,150),
    color(0,100,0),
    z(2)
  ]);
  
  const myText = add([
    text("ohhhh, fun little easter egg!"),
    pos(400,280),
    scale(0.24),
    color(255, 255, 255),
    z(3)
  ]);
  
  loadSprite("bg", "assets/bg.jpg");
  
  
  myText.text ="Use the arrow keys to collect dino nuggets.\n(watch out for burnt ones)!"



onKeyPress("space", () => {
  destroy(myText);
  destroy(box);
  go('game');
});

  
scene('game', () => {
 let dino = add([
  sprite("dino"),
  pos(width() / 2, height() / 1.5),
  scale(0.25),
  area(),
  "dino"
]);


add([
  sprite("bg2", {width: width(), height: height()}),
  z(-2),
]);

onKeyDown("left", () => {
  dino.move(-600, 0);
});

onKeyDown("right", () => {
  dino.move(600, 0);
});

// onKeyDown("up", () => {
//   dino.move(0, -200);
// });

// onKeyDown("down", () => {
//   dino.move(0, 200);
// });

function addNuggets() {
  const dino = get('dino')[0];
  
  loop(0.6, () => {
    const randomNugget = choose(["nugget1", "nugget2", "nugget3", 
    "burntNugget1",
    // "burntNugget2", 
    // "burntNugget3"
  ]);
    
    const nugget = add([
      sprite(randomNugget),
      pos(rand(vec2(width(), 10))),
      scale(0.15),
      area(),
      solid(),
      body(),
      randomNugget,
      { isBurntNugget: randomNugget.startsWith('burnt') },
    ]);
    
    nugget.collides('dino', () => {
      if (nugget.isBurntNugget) {
        go('gameOver');
      } else {
        destroy(nugget);
        if (!nugget.isBurntNugget) {
          score++;
          if (score >= 10) {
            go('endScreen');
          }
        }
      }
    });
  });
  scene('gameOver', () => {
    add([
      rect(width(), height()),
      color(0, 100, 0),
    ])
    add([
      text('You got food poisoning :(', 32),
      pos(center()),
      origin('center'),
      color(255, 0, 0),
      
    ]);
  });
}

scene('endScreen', () => {
  add([
    rect(width(), height()),
    color(0, 100, 0),
  ])
  add([
    text('dino feels nourished :)', 32),
    pos(center()),
    origin('center'),
    color(255, 182, 193),
    
  ]);
});


addNuggets()

let score = 0;

add([
  text('Score: 0', 16),
  pos(20, 20),
  layer('ui'),
  {
    update() {
      this.text = `Score: ${score}`;
    },
  },
]);
});






// let randomNugget1 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
// let randomNugget2 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
// let randomNugget3 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
// let randomNugget5 = choose(["nugget1","nugget2","nugget3"])
// let randomNugget6 = choose(["nugget1","nugget2","nugget3"])







// function addNuggets() {
//   loop(1, () => {
//     const nugget = add([
//       sprite(randomNugget1),
//       pos(rand(vec2(width(), 10))),
//       scale(0.15),
//       area(),
//       solid(),
//       body(),
//       "randomNugget1",
//     ]);

//     nugget.onCollide("dino", () => {
//       nugget.destroy();
//     });
//   });
// }


// function addMoreNuggets1() {
//   loop(1.5, () => {
//     const nugget2 = add([
//       sprite(randomNugget2),
//       pos(rand(vec2(width(), 10))),
//       scale(0.15),
//       area(),
//       solid(),
//       body(),
//       "randomNugget2",
//     ]);

//     nugget2.onCollide("dino", () => {
//       nugget2.destroy();
//     });
//   });
// }


// function addMoreNuggets2() {
//   loop(1, () => {
//     const nugget3 = add([
//       sprite(randomNugget3),
//       pos(rand(vec2(width(), 10))),
//       scale(0.15),
//       area(),
//       solid(),
//       body(),
//       "randomNugget3",
//     ]);

//     nugget3.onCollide("dino", () => {
//       nugget3.destroy();
//     });
//   });
// }

// function addMoreNuggets3() {
//   loop(1.5, () => {
//     const nugget5 = add([
//       sprite(randomNugget5),
//       pos(rand(vec2(width(), 10))),
//       scale(0.15),
//       area(),
//       solid(),
//       body(),
//       "randomNugget5",
//     ]);

//     nugget5.onCollide("dino", () => {
//       nugget5.destroy();
//     });
//   });
// }

// function thereHasToBeABetterWayToDoThis() {
//   loop(1.8, () => {
//     const nugget6 = add([
//       sprite(randomNugget6),
//       pos(rand(vec2(width(), 10))),
//       scale(0.15),
//       area(),
//       solid(),
//       body(),
//       "randomNugget6",
//     ]);

//     nugget6.onCollide("dino", () => {
//       nugget6.destroy();
//     });
//   });
// }

// addNuggets()
// addMoreNuggets1()
// addMoreNuggets2()
// addMoreNuggets3()
// thereHasToBeABetterWayToDoThis()




// action("Object", (Object) =>{
//   if (Object.passed == false && Object.pos.y < dino.pos.y) {
//     Object.passed = true
//     score += 1
//     score_count.text = score
//   }
//   Object.move(-250, 0)
// })
