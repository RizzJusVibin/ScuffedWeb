let myXPos = 100;
let myYPos = 100;

let enemyXPos = 1850;
let enemyYPos = 300;

let goalXPos = 1850;
let goalYPos = 450;

let score = 0;
let health = 5;

let myLeft, myRight, myTop, myBottom;

let enemyLeft, enemyRight, enemyTop, enemyBottom;

let goalLeft, goalRight, goalTop, goalBottom;

let ufoImage;
let rockImage;
let cowImage;
let starsImage;
let alyImage;
let loseImage;
let alienImage;

let cowSound;
let winSound;
let stSound;

function preload() {
  starsImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/stars.avif?v=1658523264694"
  );
  ufoImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/ufo.png?v=1658516485569"
  );
  rockImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/rock.png?v=1658516484107"
  );
  cowImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/cow.png?v=1658516482932"
  );
  alyImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/aly.jpg?v=1658516092328"
  );
  loseImage = loadImage(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/lose.jpg?v=1658524254991"
  );
  cowSound = loadSound(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/Cow-moo-sound.mp3?v=1658525000722"
  );
  winSound = loadSound(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/11%20So%20Nice%20(Summer%20Samba).mp3?v=1658525391809"
  );
  stSound = loadSound(
    "https://cdn.glitch.global/51c3ec6e-eb8b-468b-a545-8a80d476587c/13%20Beyond%20the%20Stars.mp3?v=1658525700405"
  );
}
function setup() {
    createCanvas(1850, 970);
    background(0, 0, 0);
    noStroke();
    rectMode(CENTER);

  



}

function draw(){
    background(0);
  image(starsImage, 0, 0, 1850, 500);
  fill(255, 255, 255);
  textSize(50);
  text("Score: " + score, 10, 50);
  text("Health: " + health, 250, 50);
  fill(1, 50, 32);
  rect(800, 750, 2850, 600);

    image(ufoImage, myXPos, myYPos, 50, 50);
  image(cowImage, goalXPos, goalYPos, 50, 50);
  image(rockImage, enemyXPos, enemyYPos, 50, 50);

  if (keyIsDown(LEFT_ARROW)) {
      myXPos -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      myXPos += 3;
    }

    if (keyIsDown(UP_ARROW)) {
      myYPos -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
      myYPos += 3;
    }

    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;

    goalLeft = goalXPos - 25;
    goalRight = goalXPos + 25;
    goalTop = goalYPos - 25;
    goalBottom = goalYPos + 25;
    goalXPos -= 25;

    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  myLeft = myXPos - 25;
  myRight = myXPos + 25;
  myTop = myYPos - 25;
  myBottom = myYPos + 25;

  goalLeft = goalXPos - 25;
  goalRight = goalXPos + 25;
  goalTop = goalYPos - 25;
  goalBottom = goalYPos + 25;
  goalXPos -= 5;

  enemyLeft = enemyXPos - 25;
  enemyRight = enemyXPos + 25;
  enemyTop = enemyYPos - 25;
  enemyBottom = enemyYPos + 25;

  enemyXPos -= 20;

  if (goalXPos < 0) {
    goalXPos = 1850;
    goalYPos = random(0, 450);
  }

  if (enemyXPos < 0) {
    enemyXPos = 1850;
    enemyYPos = random(500, 970);
  }


  enemyLeft = enemyXPos - 25;
  enemyRight = enemyXPos + 25;
  enemyTop = enemyYPos - 25;
  enemyBottom = enemyYPos + 25;

  if (
    myLeft > goalRight ||
    myRight < goalLeft ||
    myTop > goalBottom ||
    myBottom < goalTop
  ) {
  } else {
    goalXPos = 500;
    goalYPos = random(350, 450);
    score += 1;
    cowSound.play();
  }
  if (
    myLeft > enemyRight ||
    myRight < enemyLeft ||
    myTop > enemyBottom ||
    myBottom < enemyTop
  ) {
  } else {
    enemyXPos = 500;
    enemyYPos = random(50, 450);
    health -= 1;
  }

  if (health == 0) {
    enemyXPos = 0;
    goalXPos = 100;
    myXPos = 200;
    image(loseImage, 0, 0, 1850, 970);
    fill(255);
    textSize(30);
    text("Game Over | Your Score: " + score, 100, 450);
    stSound.play();
    alert("You Died!")
  }

  if (score == 20) {
    enemyXPos = 0;
    goalXPos = 100;
    myXPos = 200;
    image(alyImage, 0, 0, 1850, 970);
    fill(255);
    textSize(30);
    text("You Win | Your Score: " + score, 100, 450);
    winSound.play();
    alert("You Win!")
  }
}