kaboom()

loadSprite("earth", "assets/earth.png"),
loadSprite("enemy", "assets/fireasteroid.png");
loadSprite("enemy2", "assets/fireasteroid2.png");
// loadSprite("space", "assets/space.png"),

scene('game', () => {
  add([
    rect(width(), height()),
    color(0, 0, 0, 1),
  ])

  let enemySpeed = 100;

  const earth = add([
    sprite("earth"),
    pos(500,200),
    scale(0.15),
    area(),
  ])

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

  onCollide("earth","enemy", () => {
    go("gameOver")
  })
})

scene('gameOver', () => {
  add([
    rect(width(), height()),
    color(0, 100, 0),
  ])
  add([
    text('no more Dino', 32),
    pos(center()),
    origin('center'),
    color(255, 0, 0),
    
  ]);
});

go('game')