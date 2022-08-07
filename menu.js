function preload(){
    alienImage = loadImage(
        "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/alien.jpg?v=1658526224540"
      );
}

function setup() {
    createCanvas(1850, 970);
    background(0, 0, 0);
    noStroke();
    rectMode(CENTER);
  }

function draw() {
    image(alienImage, 0, 0, 1850, 970);
    fill(255);
    textSize(50);
    text("Mooductor", 925, 50, 100, 100);
}

function mouseClicked() {
    let myName = 'Selected Navigation'

    alert(myName)
}



  