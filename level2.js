kaboom();

loadSprite("dino", "assets/nuggetDino.png");
loadSprite("bg2", "assets/bg2.png");
loadSprite("nugget1", "assets/nugget1.png");
loadSprite("nugget2", "assets/nugget2.png");
loadSprite("nugget3", "assets/nugget3.png");
loadSprite("burntNugget1", "assets/burntNugget1.png");
loadSprite("burntNugget2", "assets/burntNugget2.png");
loadSprite("burntNugget3", "assets/burntNugget3.png");
loadSound("jazz", "assets/jazz.mp3");

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
    text("oooooo funny little lad"),
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
  pos(width() / 2, height() / 1.41),
  scale(0.33),
  area(),
  "dino"
]);

play("jazz");

add([
  sprite("bg2", {width: width(), height: height()}),
  z(-2),
]);

onKeyDown("left", () => {
  dino.move(-700, 0);
});

onKeyDown("right", () => {
  dino.move(700, 0);
});

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
    const link = add([
      text("Return to Home"),
      pos(width() / 2, height() / 1.5),
      origin("center"),
      color(255, 255, 255),
      scale(0.6),
      z(777),
      area({ cursor: "pointer", }),
    ]);
    
    
    link.clicks(() => {
      window.open("home2.html", "_blank");
    });
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
  const link = add([
    text("Return to Home"),
    pos(width() / 2, height() / 1.5),
    origin("center"),
    color(255, 255, 255),
    scale(0.6),
    z(777),
    area({ cursor: "pointer", }),
  ]);
  
  
  link.clicks(() => {
    window.open("home3.html", "_blank");
  });
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