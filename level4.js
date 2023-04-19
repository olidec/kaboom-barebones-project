kaboom()

loadSprite("player", "assets/sfPlayer.png");
loadSprite("enemy", "assets/sfEnemy.png");
loadSprite("sfbg", "assets/sfbg.jpg");
loadSound("jazz", "assets/jazz.mp3");



const box = add([
  rect(700, 400),
  pos(300,100),
  color(123,71,60),
  z(2)
]);

const myText = add([
  text("Player 1:\n\nuse 'w' 'a' 'd' to move and press space bar to punch\n\n\n\n\nPlayer 2:\n\nuse the arrow keys to move and press 'enter' to punch"),
  pos(330,200),
  scale(0.26),
  color(255, 255, 255),
  z(3)
]);

loadSprite("bg", "assets/bg.jpg");
onKeyPress("space", () => {
destroy(myText);
destroy(box);
go('game');
});

add([rect(width(), height()), color(123, 51, 51, 0.877)]);

loadSprite("bg", "assets/bg.jpg");

onKeyPress("space", () => {
destroy(myText);
destroy(box);
go('game');
});

scene('game', () => {
  add([
  sprite("sfbg", {width: width(), height: height()}),
])

play("jazz");

add([
  pos(0,height()),
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
    pos(player.pos.x -120 + player.width, player.pos.y + player.height / 3),
    color(255, 255, 255),
    lifespan(0.2),
    move(speed * 2, 0),
    area(),
    "punch"
  ]);
  
  punch.collides("enemy", () => {
    enemyHealth.value -= 10;
    enemyHealth.text = "Player 2 Health: " + enemyHealth.value;
    if (enemyHealth.value <= 0) {
      go("gameOver", { winner: "Player 1" });
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

    pos(enemy.pos.x - 111, enemy.pos.y + enemy.height / 3),
    color(255, 255, 255),
    lifespan(0.2),
    move(-speed * 2, 0),
    area(),
    "punch2"
  ]);

  punch2.collides("player", () => {
    playerHealth.value -= 10;
    playerHealth.text = "Player 1 Health: " + playerHealth.value;
    if (playerHealth.value <= 0) {
      go("gameOver", { winner: "Player 2" });
    }
  });
  
  wait(enemyPunchCooldown, () => {
    enemyCanPunch = true;
  });
  
});


const playerHealth = add([
  text("Player 1 Health: 100"),
  pos(20, 20),
  layer("ui"),
  scale(0.5),
  {
    value: 100
  }
]);

const enemyHealth = add([
  text("Player 2 Health: 100"),
  pos(780, 20),
  layer("ui"),
  scale(0.5),
  {
    value: 100
  }
]);
})



scene("gameOver", ({ winner }) => {
  add([
    text(`${winner} Wins!`),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    z("33"),
  ]);
  add([rect(width(), height()), color(98, 60, 30, 0.877)]);
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
  keyPress("space", () => {
    go("game");
  });
});