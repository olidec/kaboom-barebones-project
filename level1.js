kaboom();


loadSprite("bean", "assets/egg1.png")

add([
  sprite("bg", {width: width(), height: height()}),
  z(-2),
]);

// add([
//   sprite("bean"),          
//   pos(center()),
//   "bean",
//   z(1)
// ]);

const box = add([
  rect(600, 300),
  pos(350,150),
  color(163, 199, 188),
  z(2)
]);

const myText = add([
  text("ohhhh, fun little easter egg!"),
  pos(400,280),
  scale(0.6),
  color(255, 255, 255),
  z(3)
]);

loadSprite("bg", "assets/bg.jpg");


myText.text ="Press the space bar to hatch your dinosaur!"


// Detect when space bar is pressed and remove the rules text
onKeyPress("space", () => {
  destroy(myText);
  destroy(box);
});

// define the number of times space bar needs to be pressed
const PRESS_COUNT = 10;


loadSprite("alternate-image", "assets/egg2.png");
loadSprite("egg3", "assets/egg3.png")
loadSprite("egg4", "assets/egg4.png");
loadSprite("egg5", "assets/egg5.png");



let counter = 0;


onKeyPress("space", () => {
 
  counter++;

  if (counter === 1) {
    
    add([
      sprite("bean"),
      pos(400,280),
      scale(0.5),
      "bean",
    ]);

  }
  if (counter === PRESS_COUNT) {
    
    destroy(get("bean")[0]);
    add([
      sprite("alternate-image"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "alternate-image",
    ]);

  }
  if (counter === 20) {
    
    destroy(get("alternate-image")[0]);
    add([
      sprite("egg3"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg3",
    ]);
  }
  if (counter === 30) {
    
    destroy(get("egg3")[0]);
    add([
      sprite("egg4"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg4",
    ]);
  }
  if (counter === 40) {
    
    destroy(get("egg4")[0]);
    add([
      sprite("egg5"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg5",
    ]);  
  }
  if (counter === 42) {
    
      const dialogBox = document.createElement("div");
  dialogBox.innerHTML = `
    <p>Nice! Please name your dino:</p>
    <input type="text" id="name-input">
    <button id="submit-button">Submit</button>
  `;
  dialogBox.style.position = "absolute";
  dialogBox.style.top = "50%";
  dialogBox.style.left = "50%";
  dialogBox.style.transform = "translate(-50%, -50%)";
  dialogBox.style.backgroundColor = "white";
  dialogBox.style.padding = "69px";
  dialogBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  dialogBox.style.zIndex = "9999";
  document.body.appendChild(dialogBox);

  const nameInput = document.getElementById("name-input");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    const name = nameInput.value;
    console.log("The player's name is: ", name);
    document.body.removeChild(dialogBox);
  });
  }
  
  
});





