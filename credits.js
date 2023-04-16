kaboom();

add([rect(width(), height()), color(98, 160, 83, 0.877)])

const box = add([
	rect(600, 300),
	pos(350,150),
	color(90, 150, 82),
	z(2)
  ]);
  
  const myText = add([
	text("ohhhh, fun little easter egg!"),
	pos(400,280),
	scale(0.28),
	color(0, 50, 82),
    z(3),
  ]);
  
  
  myText.text ="Luana Strachan\nFanny Heier\nEmilie Huynh\nAnn-Sophie Bullinger"