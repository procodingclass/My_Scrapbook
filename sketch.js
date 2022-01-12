var database;
var form,
  game,
  firend,
  playerCount = 0;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("bgimage.png");
}

function setup() {
 
  canvas = createCanvas(850,470);
  database = firebase.database();

  page = new Pages();
  page.getPage();
  form = new Form();
  friend= new Friends();
  friend.getCount(); 

  
}

function draw() {

  if(gameState === 0){
      background(bgimg);
      form.display();
  }
            
  if(gameState === 1){
  clear();   
  background(0);
  form.end();
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
