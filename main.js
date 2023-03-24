kaboom();


loadSprite("mole", "assets/mole.png");
loadSprite("bg", "assets/bg.jpg");
loadSpriteAtlas("assets/whack.png",{
  "whack":{
    x:10,
    y:580,
    width:1105,
    height:120,
    sliceX: 7,
    anims: {
      hit: {from: 0, to: 6}
    },
  },
})

scene("start", () => {
  add([pos(0, 0), color(0, 0, 255), rect(width(), height())]);

  add([
    text("Whackamole Game", {size: 80}),
    pos(200,50)
  ])

  add([
    "startGame",
    text("Click here to start", { size: 60} ),
    pos(200,400),
    area(),
  ]);

  add([
    pos(200,200),
    text("Instructions: \n Click on the moles to 'whack' them.\n What is your highscore?", {size: 40} )
  ])

  onClick("startGame", () => {
    go("game");
  });
  // onClick("startGame", () => {
  //   go("test")
  // });
});

go("start");


scene("game", () => {
  add([sprite("bg",{width: width(), height: height()} )]);

  let whack = add([
    "whack",
    sprite("whack",{width: 400}),
    pos(mousePos().x,mousePos().y),
    origin("center")
  ])

  onMouseMove(()=> {
    whack.pos = mousePos()
  })

  const score = add([
    text("Score: 0"),
    pos(50, 50),
    color(0, 0, 255),
    { value: 0 },
    timer(30, () => {
      go("gameover", score.value);
      // window.location.href = "http://www.w3schools.com";

    }),
  ]);

  function spawnMoles(x, y) {
    add([
      "mole",
      sprite("mole", { width: 200 }),
      pos(x, y),
      area(),
      lifespan(rand(2, 4), {fade: 1}),
    ]);
  }

  loop(1, () => {
    let xPos = rand(1, 26) * 50;
    let yPos = rand(2, 9) * 50;
    spawnMoles(xPos, yPos);
  });

  onClick(() => {
    whack.play("hit")
  })

  onClick("mole", (mole) => {
    whack.play("hit")
    mole.destroy();
    score.value += 1;
    score.text = "Score: " + score.value;
  });
});


scene("gameover", (score) => {
  add([rect(width(), height()), color(0, 153, 51)]);

  add([pos(100, 50), text("Time's Up!", { size: 60 })]);

  add([pos(100, 100), text("Your score was: " + score, { size: 60 })]);



  add([
    "restart",
    pos(100, 250),
    color(255, 255, 204),
    text("Click here to try again", { size: 80 }),
    area(),
  ]);

  onClick("restart", () => {
    go("game");
    // window.location.href = "http://www.w3schools.com";

  });
});
