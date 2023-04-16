kaboom()

loadSprite("player", "assets/sfPlayer.png");
loadSprite("enemy", "assets/sfEnemy.png");
loadSprite("sfbg", "assets/sfbg.jpg");

add([
  sprite("sfbg", {width: width(), height: height()}),
])

add([
  pos(0,560),
  rect(width(),height()/5),
  color(255,255,255,0.2),
  area(),
  solid(),
])

const enemy = add([
  sprite("enemy"),
  pos(800, 420),
  scale(0.5),
  body(),
  area(),
  "enemy"
]);

const player = add([
  sprite("player"),
  pos(280, 420),
  scale(0.5),
  area(),
  body(),
  "player"
]);

const speed = 300;
keyDown("w", () => {
  player.move(0, -speed*2.5);
});
keyDown("a", () => {
  player.move(-speed, 0);
});

keyDown("d", () => {
  player.move(speed, 0);
});




const playerPunchCooldown = 0.5;
let playerCanPunch = true;

keyPress("space", () => {
  if (!playerCanPunch) {
    return;
  }
  
  playerCanPunch = false;
  
  const punch = add([
    rect(20, 20),
    pos(player.pos.x + player.width, player.pos.y + player.height / 3),
    color(255, 255, 255),
    lifespan(0.2),
    move(speed * 2, 0),
    area(),
    "punch"
  ]);
  
  punch.collides("enemy", () => {
    playerHealth.value -= 10;
    playerHealth.text = "Player Health: " + playerHealth.value;
    if (playerHealth.value <= 0) {
      go("gameOver", { winner: "Enemy" });
    }
  });

  
  wait(playerPunchCooldown, () => {
    playerCanPunch = true;
  });
  

});

keyDown("up", () => {
  enemy.move(0, -speed*2.5);
});

keyDown("left", () => {
  enemy.move(-speed, 0);
});

keyDown("right", () => {
  enemy.move(speed, 0);
});


const enemyPunchCooldown = 0.5;
let enemyCanPunch = true;

keyPress("enter", () => {
  if (!enemyCanPunch) {
    return;
  }
  
  enemyCanPunch = false;
  
  const punch2 = add([
    rect(20, 20),
    pos(enemy.pos.x - 150, enemy.pos.y + enemy.height / 3),
    color(255, 255, 255),
    lifespan(0.2),
    move(-speed * 2, 0),
    area(),
    "punch2"
  ]);

  punch2.collides("player", () => {
    enemyHealth.value -= 10;
    enemyHealth.text = "Enemy Health: " + enemyHealth.value;
    if (enemyHealth.value <= 0) {
      go("gameOver", { winner: "Player" });
    }
  });
  
  wait(enemyPunchCooldown, () => {
    enemyCanPunch = true;
  });
  
});
  // action("enemy", (enemy) => {
  //   if (punch.collides("enemy")) {
  //     enemyHealth.value -= 10;
  //     enemyHealth.text = "Enemy Health: " + enemyHealth.value;
  //     destroy(punch);
  //     if (enemyHealth.value <= 0) {
  //       go("gameOver", { winner: "Player" });
  //     }
  //   }
  // });
  // action("player", (player) => {
  //   if (punch.collides("player")) {
  //     playerHealth.value -= 10;
  //     playerHealth.text = "Player Health: " + playerHealth.value;
  //     destroy(punch);
  //     if (playerHealth.value <= 0) {
  //       go("gameOver", { winner: "Enemy" });
  //     }
  //   }
  // });
// });


const playerHealth = add([
  text("Player Health: 100"),
  pos(20, 20),
  layer("ui"),
  scale(0.6),
  {
    value: 100
  }
]);

const enemyHealth = add([
  text("Enemy Health: 100"),
  pos(780, 20),
  layer("ui"),
  scale(0.6),
  {
    value: 100
  }
]);


// punch.collides("enemy", () => {
//   playerHealth.value -= 10;
//   playerHealth.text = "Player Health: " + playerHealth.value;
//   if (playerHealth.value <= 0) {
//     go("gameOver", { winner: "Enemy" });
//   }
// });

// punch2.collides("player", () => {
//   enemyHealth.value -= 10;
//   enemyHealth.text = "Enemy Health: " + enemyHealth.value;
//   if (enemyHealth.value <= 0) {
//     go("gameOver", { winner: "Player" });
//   }
// });

scene("gameOver", ({ winner }) => {
  add([
    text(`${winner} Wins!`),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    layer("ui")
  ]);

  keyPress("space", () => {
    go("game");
  });
});