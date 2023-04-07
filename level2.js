kaboom();

loadSprite("dino", "assets/dino.png");
loadSprite("bg2", "assets/bg2.png");
loadSprite("nugget1", "assets/nugget1.png");
loadSprite("nugget2", "assets/nugget2.png");
loadSprite("nugget3", "assets/nugget3.png");
loadSprite("burntNugget1", "assets/burntNugget1.png");
loadSprite("burntNugget2", "assets/burntNugget2.png");
loadSprite("burntNugget3", "assets/dinonuggets.png");

   add([
    sprite("bg2", {width: width(), height: height()}),
    z(-2),
  ]);

const Dino = add([
  sprite("dino"),
  pos(width() / 2, height() / 1.5),
  scale(0.25),
  area(),
]);

onKeyDown("left", () => {
  Dino.move(-600, 0);
});

onKeyDown("right", () => {
  Dino.move(600, 0);
});

onKeyDown("up", () => {
  Dino.move(0, -200);
});

onKeyDown("down", () => {
  Dino.move(0, 200);
});

const randomNugget1 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
const randomNugget2 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
const randomNugget3 = choose(["nugget1","nugget2","nugget3","burntNugget1","burntNugget2","burntNugget3"])
const randomNugget4 = choose(["nugget1","nugget2","nugget3"])
const randomNugget6 = choose(["nugget1","nugget2","nugget3"])

function addNuggets() {

  loop(1.5, () => {
     add([
  sprite(randomNugget1),
  pos(rand(vec2(width(), 10))),
  scale(0.15),
  area(),
  body(),
]);
  })
}

function addMoreNuggets1() {

  loop(1,() => {
    
    add([
  sprite(randomNugget2),
  pos(rand(vec2(width(), 10))),
  scale(0.15),
  area(),
  body(),
]);
  })
}

function addMoreNuggets2() {

  loop(1,() => {
    
    add([
  sprite(randomNugget3),
  pos(rand(vec2(width(), 10))),
  scale(0.15),
  area(),
  body(),
]);
  })
}

function addMoreNuggets3() {

  loop(1,() => {
    
    add([
  sprite(randomNugget4),
  pos(rand(vec2(width(), 10))),
  scale(0.15),
  area(),
  body(),
]);
  })
}

function thereHasToBeABetterWayToDoThis() {

  loop(1.81,() => {
    add([
  sprite(randomNugget6),
  pos(rand(vec2(width(), 10))),
  scale(0.15),
  area(),
  body(),
]);
  })
}

addNuggets()
addMoreNuggets1()
addMoreNuggets2()
addMoreNuggets3()
thereHasToBeABetterWayToDoThis()



onCollide("dino","nugget1", () => {
  destroy
})
onCollide("dino","nugget2", () => {
  
})
onCollide("dino","nugget3", () => {
  
})

onCollide("dino","burntNugget1", () => {
  go("gameover")
})
onCollide("dino","burntNugget2", () => {
  go("gameover")
})
onCollide("dino","burntNugget3", () => {
  go("gameover")
})

// action("Object", (Object) =>{
//   if (Object.passed == false && Object.pos.y < dino.pos.y) {
//     Object.passed = true
//     score += 1
//     score_count.text = score
//   }
//   Object.move(-250, 0)
// })
