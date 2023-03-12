kaboom();


loadSprite("bean", "assets/egg1.png")

add([
  sprite("bg", {width: width(), height: height()}),
]);

add([
  sprite("bean"),
  pos(center()),
]);

loadSprite("bg", "assets/bg.jpg");







// define the number of times space bar needs to be pressed
const PRESS_COUNT = 10;


loadSprite("bean", "assets/egg1.png");

loadSprite("alternate-image", "assets/egg2.png");

loadSprite("egg3", "assets/egg3.png")

loadSprite("egg4", "assets/egg4.png");

loadSprite("egg5", "assets/egg5.png");



let counter = 0;


onKeyPress("space", () => {
 
  counter++;

  // if counter reaches PRESS_COUNT, change the image
  if (counter === PRESS_COUNT) {
    
    add([
      sprite("alternate-image"),
      pos(center()),
    ]);

  }
  if (counter === 20) {
    
    add([
      sprite("egg3"),
      pos(center()),
    ]);
  }
  if (counter === 30) {
    
    add([
      sprite("egg4"),
      pos(center()),
    ]);
  }
  if (counter === 40) {
    
    add([
      sprite("egg5"),
      pos(center()),
    ]);
  }
});

