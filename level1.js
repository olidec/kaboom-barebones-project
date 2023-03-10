const clickableEgg1 = document.getElementById("clickableEgg1");
let clickCount = 0;

clickableImage.addEventListener("click", function() {
  clickCount++;
  if (clickCount === 10) {
    clickableImage.src = "newImage.png";
  }
});