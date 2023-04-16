kaboom({
    background: [202,222,180],
 })  

loadSprite("jnrDino", "assets/dino.png")
loadSprite("jnrObstacle", "assets/obstacle.png")
loadSound("dinoJump", "assets/dinoJump.mp3")


let score = 0

scene("gameover", () => {
  add([
    text("Game Over\n" + "Score:" + score),
    pos(420,200),

  ])

onKeyPress("space", () => {
    go("game")
  })
})


const box = add([
  rect(600, 300),
  pos(350,150),
  color(92,150,90),
  z(2)
]);

const myText = add([
  text("ohhhh, fun little easter egg!"),
  pos(400,280),
  scale(0.28),
  color(255, 255, 255),
  z(3)
]);


myText.text ="Press space bar to jump over obstacles!"



onKeyPress("space", () => {
destroy(myText);
destroy(box);
go('game');
});


scene("game", () => {

  score = 0

  const score_count = add([
    text(score)
  ])

    const dino = add([
      pos(width()/2-100,100),
      sprite("jnrDino"),
      scale(0.24),
      area(),
      body(),
      "dino"
])

add([
  pos(0,399),
  rect(width(),height()),
  color(200,111,60),
  area(),
  solid(),
])
  
  onKeyPress("space", () => {
    if (dino.pos.y > 240)
    dino.jump(750)
    play("dinoJump")
  })
  
  action("Object", (Object) =>{
    if (Object.passed == false && Object.pos.x < dino.pos.x) {
      Object.passed = true
      score += 1
      score_count.text = score
    }
    Object.move(-300, 0)
  })

  function addObs() {

    loop(2,() => {
        add([
            pos(width(),335),
            sprite("jnrObstacle"),
            scale(0.24),
            area(),
            body(),
            "Object",
            { passed: false}
            ])
    })
}
  
onCollide("dino","Object", () => {
  go("gameover")
})

  addObs()
})

 

go("game")