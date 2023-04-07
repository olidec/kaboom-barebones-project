kaboom();

loadSprite("dino", "assets/dino.png");
loadSprite("jrbg", "assets/jrbg.jpg")

add([
    sprite("dino"),
    pos(80, 300),
    scale(0.25), 
  ]);

  add([
    sprite("jrbg", {width: width(), height: height()}),
    z(-2),
  ]);

      