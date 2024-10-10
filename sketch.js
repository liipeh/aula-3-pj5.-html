function setup() {
    createCanvas(1000, 1000);
    background("black")
  }
  
  function draw() {
    stroke("blue ");
    fill("white");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  