kaboom()

loadSprite("earth", "assets/earth.png"),
loadSprite("enemy", "assets/fireasteroid.png");
loadSprite("enemy2", "assets/fireasteroid2.png");
// loadSprite("space", "assets/space.png"),
add([rect(width(), height()), color(0, 0, 0, 0.877)])


const box = add([
  rect(600, 300),
  pos(350,150),
  color(50, 50, 50),
  z(2)
]);

const myText = add([
  text("Save the dino population by clicking the asteroids!"),
  pos(375,280),
  scale(0.24),
  color(255, 255, 255),
  z(3)
]);

loadSprite("bg", "assets/bg.jpg");


onKeyPress("space", () => {
  destroy(myText);
  destroy(box);
  go('game')
});

scene('game', () => {
  add([
    rect(width(), height()),
    color(0, 0, 0, 1),
  ])

  let enemySpeed = 100;

  const earth = add([
    sprite("earth"),
    pos(700, 350),
    scale(0.24), 
    area(),
    origin("center"), 
    rotate(0),
    "earth", 
  ]);
  action("earth", () => {
    
    earth.angle += 1;
  });

  function spawnEnemy() {
    add([
      sprite('enemy'),
      pos(width() + 20, rand(0, height())),
      origin('center'),
      layer('obj'),
      area(),
      scale(0.1),
      'enemy',
    ]);

    wait(rand(1, 6), spawnEnemy);
  }

  action('enemy', (e) => {
    e.move(-enemySpeed, 0);
  });

  spawnEnemy()

  function spawnEnemy2() {
    add([
      sprite('enemy2'),
      pos(0, rand(0, height())),
      origin('center'),
      layer('obj'),
      scale(0.1),
      area(),
      'enemy2',
    ]);

    wait(rand(1, 7), spawnEnemy2);
  }

  action('enemy2', (e) => {
    e.move(enemySpeed, 0);
  });

  spawnEnemy2()

  onClick('enemy', (enemy) => {
    destroy(enemy);
  });

  onClick('enemy2', (enemy2) => {
    destroy(enemy2);
  });

  earth.collides("enemy", () => {
    go('gameOver');
  })

  earth.collides("enemy2", () => {
    go('gameOver');
  })
})

scene('gameOver', () => {
  add([
    rect(width(), height()),
    color(0, 0, 0),
  ])
  add([
    text('no more Dinos', 32),
    pos(center()),
    origin('center'),
    color(60, 60, 50),
    
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
    window.open("home5.html", "_blank");
  });
  const link2 = add([
    text("credits"),
    pos(width() / 1.11, height() / 6),
    origin("center"),
    color(255, 255, 255),
    scale(0.24),
    z(777),
    area({ cursor: "pointer", }),
  ]);
  
  
  link2.clicks(() => {
    window.open("credits.html", "_blank");
  });
});