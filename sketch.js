
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var division = []
var divisionHeight = 300;
var particle
var particles = []
var plinko = []
var count = 0
var score = 0
var gameState = "PLAY"

function setup() {
	createCanvas(810, 750);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,745,900,10);

	if(gameState == "END"){
		background(0);
		fill("red");
		textSize(100);
		text("Game Over",405,325);
	}

	

	for (var i = 0; i<=width; i=i+80){
		division.push(new Division(i,height-divisionHeight/2, 10,divisionHeight));
	}

	for(var j=75; j<=width; j= j+50){
		plinko.push(new Plinko(j, 75,10));
	}

	for(var j=50; j<=width-10; j= j+50){
		plinko.push(new Plinko(j, 175,10));
	}

	for(var j=75; j<=width; j= j+50){
		plinko.push(new Plinko(j, 275,10));
	}

	for(var j=50; j<=width-10; j= j+50){
		plinko.push(new Plinko(j, 375,10));
	}


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  fill(255);
  textSize(35);
  text("Score  : "+score,20,40);

  textSize(30)
  text("500 ",15,550);
  text("500 ",90,550);
  text("500 ",170,550);
  text("500 ",250,550);
  text("100 ",330,550);
  text("100 ",410,550);
  text("100 ",490,550);
  text("200 ",570,550);
  text("200 ",650,550);
  text("200 ",730,550);
  
  ground.display();

 

  if(gameState === "END"){
	  background(0);
	  fill("red");
	  textSize(100);
	  text("Game Over",200,400)
  }

  for(var n = 0; n<division.length; n++) {
	  division[n].display();
  }

  for (var j = 0; j<plinko.length; j++){
	plinko[j].display();
}

 

if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
  }
function mousePressed()
{
	if(gameState!== "END"){
		count++;
		particle = new Particle(mouseX,10,10,10);
    particle.display();
    particle.isStatic=false
	}
}
 


