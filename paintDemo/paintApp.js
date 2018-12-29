var paintingWidth = 1200;
var paintingHeight = 700;
// var uiWidth = 220;

var circles = new Array(); // 笔迹
var lines=new Array();//直线笔记
var triangles=new Array();//三角形笔迹

var bru;
var bru_1;
var bru_2;

var brushStroke; 
var brushStroke_1;
var brushStroke_2;  // 选择默认笔刷x

var brushId = 0;
var brushId_1=0;
var brushId_2=0;

var btns=[];

var R=0;
var G=0;
var B=0;

var sel;
var sel_1;

var button=[];

var num=1;
var num1=0;

var slider;
var slider_1;
var slider_2;
//var slider_3;

var framesize=0;

//其它类型
var particles = [];

var pushed = false;
var run=false;
// var hue;
// var bgHue;
var reset=true;
var vehicles=[];
var numVehicles=100;
var ele;
var sound=[];
var j=1;

function setup() 
{
	createCanvas(window.innerWidth,window.innerHeight);
	//music
	getsound();
	ele=createAudio(sound[j]);
	//ele.autoplay(0);

	//crows
	push();
	hue=random(0,360);
	for (i = 0; i < numVehicles; i++) 
	{
        var x = random(1200);
        var y = random(700);
        vehicles[i] = new Vehicle(x, y);
    }
	pop();

//主题颜色选择器
	push();
	textAlign(CENTER);
	sel = createSelect();
	sel.position(1495, 170);
	sel.option('Default');
	sel.option('Theme 1');
	sel.option('Theme 2');
	sel.option('Theme 3');
	sel.option('Theme 4');
	sel.option('Theme 5');
	sel.option('Theme 6');
	sel.option('Theme 7');
	sel.option('Theme 8');
	sel.option('Theme 9');
	sel.option('Theme 10');
	sel.changed(mySelectEvent);
	pop();

	//其它类型的画笔
	push();
	textAlign(CENTER);
	sel_1=createSelect();
	sel_1.position(1635,222);
	sel_1.option('');
	sel_1.option('Fountain');
	sel_1.option('Fireworks');
	sel_1.option('No');
	sel_1.changed(myselectEvent);
	pop();

	//color
	btns.push(new ColorBtn(1490, 195, 18, 18, 200, 50, 50));
  	btns.push(new ColorBtn(1508, 195, 18, 18, 200, 100, 50));
  	btns.push(new ColorBtn(1526, 195, 18, 18, 200, 150, 50));
  	btns.push(new ColorBtn(1490+18*3, 195, 18, 18, 150, 200, 50));
  	btns.push(new ColorBtn(1490+18*4, 195, 18, 18, 100, 200, 50));
  	btns.push(new ColorBtn(1490+18*5,195, 18, 18, 50, 200, 50));
  	btns.push(new ColorBtn(1490+18*6, 195, 18, 18, 50, 150, 200));
  	btns.push(new ColorBtn(1490+18*7, 195, 18, 18, 50, 100, 200));
  	btns.push(new ColorBtn(1490+18*8, 195, 18, 18, 50, 50, 200));
  	btns.push(new ColorBtn(1490+18*9, 195, 18, 18, 100, 50, 200));
	btns.push(new ColorBtn(1490+18*10, 195, 18, 18, 0, 10, 10));

	//menu
	//line
	button[0] = createButton('Circle');
	button[0].size(40,18);
	button[0].position(1460, 222);
	button[0].mousePressed(changetocircle);

	//circle
	button[1]=createButton('Rectangle');
	button[1].size(65,18);
	button[1].position(1505,222);
	button[1].mousePressed(changtorectangle);

	//triangle
	button[2]=createButton('Triangle');
	button[2].size(55,18);
	button[2].position(1575,222);
	button[2].mousePressed(changtoctriangle);

	//frame
	button[3]=createButton('Yes');
	button[3].size(33,18);
	button[3].position(1460,280);
	button[3].mousePressed(changetoyes);

	button[4]=createButton('No');
	button[4].size(33,18);
	button[4].position(1500,280);
	button[4].mousePressed(changetono);

	button[5]=createButton('Play');
	button[5].size(33,18);
	button[5].position(1405,700);
	button[5].mousePressed(playsong);

	button[8]=createButton('Pause');
	button[8].size(42,18);
	button[8].position(1446,700);
	button[8].mousePressed(pausesong);

	button[6]=createButton('Stop');
	button[6].size(33,18);
	button[6].position(1500,700);
	button[6].mousePressed(stopsong);

	button[7]=createButton('Next');
	button[7].size(33,18);
	button[7].position(1550,700);
	button[7].mousePressed(nextsong);


	slider_1=createSlider(0,100,1,1);
	slider_1.position(1550,280);
	//滑动条
	slider=createSlider(0,100,1,1);
	slider.position(1445,245);
	
	//volume
	slider_2=createSlider(0,100,1,1);
	slider_2.position(1470,730);
	//getvolume();
	
  }

  //getsound
  function getsound()
  {
	  sound[0]='music/22(Bergs_Remix)-Taylor_Swift_Bergs.aac';
	  sound[1]='music/Taylor Swift - 22 [mqms2].mp3';
	  sound[2]='music/Taylor Swift - Begin Again [mqms2].mp3';
	  sound[3]='music/Taylor Swift - Blank Space [mqms2].mp3';
	  sound[4]='music/Taylor Swift - Enchanted [mqms2].mp3';
	  sound[5]='music/Taylor Swift - Haunted [mqms2].mp3'
	  sound[6]='music/Taylor Swift - I Knew You Were Trouble [mqms2].mp3'
	  sound[7]=' music/Taylor Swift - If This Was a Movie [mqms2].mp3'
	  sound[8]='music/Taylor Swift - Last Christmas [mqms2].mp3'
	  sound[9]='music/Taylor Swift - Love Story [mqms2].mp3'
	  
  }  
  
  //get volume
  function getvolume()
  {
	var voice=slider_2.value();
	ele.volume(voice/100);
  }

  function playsong()
  {
	ele.play()
  }
  function pausesong()
  {
	  ele.pause();
  }
  function stopsong()
  {
	ele.stop();
  }

function nextsong()
{
	j++;
	if(j>9)
		j=0;
	ele.stop();
	ele=createAudio(sound[j]);
	ele.play();

}
  function createVehicle(x, y) 
  {
    vehicles[numVehicles] = new Vehicle(x, y);
    numVehicles += 1;
}

  function changetoyes()
  {
	var sel_1num=slider_1.value();
	framesize=sel_1num/100*2;
	
  }

  //size
  function shapesize()
  {
	  var sz=slider.value();
	  return sz/100*5;
  }

//no need frame
  function changetono()
  {
	slider_1.value(0);
	framesize=0;

  }

  //change shape
  function changtoctriangle()
  {
	num=3;
  }

  function changtorectangle()
  {
	num=2;
  }

  function changetocircle() 
  {
	num=1;
  }

  //显示背景
  //据说是人舒服的十个颜色
  function mySelectEvent() 
  {
	var item = sel.value();
	if (item=='Default')
	{
		background(214,248,255);
	}
	else if (item=='Theme 1')
	{
		background(25,202,173);
	}
	else if (item=='Theme 2')
	{
		background(140,199,181);
	}
	else if (item=='Theme 3')
	{
		background(160,238,225);
	}
	else if (item=='Theme 4')
	{
		background(190,231,233);
	}
	else if (item=='Theme 5')
	{
		background(190,237,199);
	}
	else if (item=='Theme 6')
	{
		background(214,213,183);
	}
	else if (item=='Theme 7')
	{
		background(209,186,116);
	}
	else if (item=='Theme 8')
	{
		background(230,206,172);
	}
	else if (item=='Theme 9')
	{
		background(236,173,158);
	}
	else if (item=='Theme 10')
	{
		background(244,96,108);
	}
	push();
	textSize(15);
	text('It is ' + item + '!', 20, 20);
	pop();
  }

  //选择其它的少数图形来画
  function myselectEvent()
  {
	  var items=sel_1.value();
	  if(items=='Fountain')
	  {
		num1=1;
		if(!run)
			run=!run;
	  }
	  else if(items=='Fireworks')
	  {
		  num1=2;
		  if(!run)
			run=!run;
	  }
	  else
	  {
		  num1=0;
	  }
  }

  //喷泉
  function Particle(_loc) 
  {
    var loc = _loc.copy();
    var vel = createVector(random(-1, 1), random(-2, 0));
    var acc = createVector(0, 0.05);
    var lifespan = 255;
    var h = random(360);
    var sz = random(25, 50);

    // Method to update location
    this.update = function() {
        vel.add(acc);
        loc.add(vel);
        lifespan -= 2;
    }

    // Method to display
    this.paint = function() {
        stroke(h, 90, 90, lifespan);
        strokeWeight(2);
        fill(h, 90, 50, lifespan);
        ellipse(loc.x, loc.y, sz, sz);
    }

    // Is the particle still useful?
    this.isDead = function() {
        if (lifespan < 0.0) {
            return true;
        } else {
            return false;
        }
    }
}


//画画
function draw() 
{
	//decide which brushes
	getvolume();
	getsound();
	if(num1)
	{
		if(num1==1)
		{
			push();
			if(run)
			{
				if (pushed) 
				{
				if(mouseX<1400&&mouseX>200&&mouseY>150&&mouseY<850)
					particles.push(new Particle(createVector(mouseX, mouseY)));
			} 
			else 
			{
				particles.push(new Particle(createVector(800, 220)));
			}
			for (var i = particles.length - 1; i >= 0; i--) 
			{
				particles[i].update();
				particles[i].paint();
				if (particles[i].isDead()) 
				{
					particles.splice(i, 1);
				}
			}
			}
			pop();
		}

		else if(num1==0)
		{
			run=false;
		}

		else if(num1==2)
		{
			push();
			var target
			if(mouseX<1400&&mouseX>200&&mouseY>150&&mouseY<850)
			{
					target=createVector(mouseX, mouseY);
			}
			else 
			 {
				target=createVector(800, 220);
			}
			
			for (i = 0; i < numVehicles; i++) 
			{
        	vehicles[i].seek(target);
        	// vehicles[i].edges();
        	vehicles[i].display();
        	vehicles[i].update();
    		}
			pop();
		}
		brushStroke = [];
		brushStroke_1=[];
		brushStroke_2=[];
	}

	else
	{
		brushStroke = brushes[brushId];
		brushStroke_1=brushes_1[brushId_1];
		brushStroke_2=brushes_2[brushId_2];
	}
		
	//display my information
	push();
	textSize(40);
	textFont('Times New Roman')
	text("This is Targue",750,50);
	pop();

	// draw ui canvas
	push();
	noStroke();
	fill(180);
	rect(1400,150,320,paintingHeight);
	pop();

	// display infomation
	push();
	textSize(14);
	text("Up/Down: Select brush",1405,840);
	text("C: Weaken painting",1405,820);
	text("X: Clear the canvas",1405,800);
	if(num==1)
	{
		text("Brush:" + brushId, 1405,165);
	}
	else if(num==2)
	{
		text("Brush:" + brushId_1, 1405,165);
	}
	else if(num==3)
	{
		text("Brush:" + brushId_2, 1405,165);
	}
	text("Theme color:",1405,185);
	text("Brush color:",1405,210);
	text("Shape:",1405,235);
	text("Size:",1405,260);
	text("Frame:",1405,295)
	text("Volume:",1405,745)
	pop();
	
	// draw painting frame
	//white background
	push();
	noStroke();
	fill(255,7);
	rect(200,150,paintingWidth,paintingHeight);
	pop();

	//black block
	push();
	stroke(0);
	strokeWeight(2);
	noFill();
	rect(200,150,paintingWidth,paintingHeight);
	pop();
	
	// draw painting contents: strokes
	//decide what to draw
	// if (num==1)
	// {
		for(var i=0;i<circles.length;i++)
	{
		bru = circles[i];
		if(bru.draw)
		{
			bru.draw();
		}
		
	}
	// }

	// else if(num==2)
	// {
		for(var i=0;i<lines.length;i++)
	{
		bru_1=lines[i];
		if(bru_1.draw)
		{
			bru_1.draw();
		}
		
	}
	// }

	// else if(num==3)
	// {
		for(var i=0;i<triangles.length;i++)
	{
		bru_2= triangles[i];
		if(bru_2.draw)
		{
			bru_2.draw();
		}
		
	}
	// }
	
	//get color
	push();
	stroke(180);
  	strokeWeight(2);
	for (var i = 0; i < btns.length; i++)
	{
      btns[i].displayBtn();
	  if (btns[i].isMouseInBtn())
	  {
		cursor(HAND);
		if(btns[i].onclick())
		{
		R=btns[i].R*1.5;
		G=btns[i].G*1.5;
		B=btns[i].B*1.5;
		}
		
      }
    }
  pop();

}

var mouseDown=false;
// *************** 辅助 ***************//
// 判断有效区域在白色背景里面
function mouseInPaintingRect()
{
	var inside = 
		mouseX>=200 && mouseX<=paintingWidth+200 && 
		mouseY>=150 && mouseY<=paintingHeight+150;
	cursor();
	return inside;
}

// *************** 鼠标、触控交互 ***************//
//不画的时候鼠标移动坐标记录
function mouseMoved()
{
	if(!mouseIsPressed)
	{	
		if(num==1)
		{
			for(var i=0;i<circles.length;i++)
		{	
			//print("c.pointerMove(mouseX,mouseY)");
			var c = circles[i];
			if(c.pointerMove)
			{
				c.pointerMove(mouseX,mouseY);
			
			}
		}
		}
		else if(num==2)
		{
			for(var i=0;i<lines.length;i++)
		{	
			//print("c.pointerMove(mouseX,mouseY)");
			var c = lines[i];
			if(c.pointerMove)
			{
				c.pointerMove(mouseX,mouseY);
				
			}
		}
		}
		else if(num==3)
		{
			for(var i=0;i<triangles.length;i++)
		{	
			//print("c.pointerMove(mouseX,mouseY)");
			var a = triangles[i];
			if(a.pointerMove)
			{
				a.pointerMove(mouseX,mouseY);
				
			}
		}
		}
		
	}
}

//
function Vehicle(x, y, m) 
{

    // Properties
    this.size = random(5,10);
    this.maxSpeed = random(5, 10);
    this.maxForce = random(0, 4);
    // this.maxSpeed = random(100,150)/this.size;
    // this.maxForce = random(10,200)/this.size;
    this.mass = this.size; //this.size * this.size * PI;
    this.Hsl = hue + random(-10, 10);
    this.Hsl = correctRotation(this.Hsl);
    this.hSl = random(70, 100);
    this.hsL = random(40, 100);
    // Motion
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    var initV = 10;
    this.vel = createVector(random(0, 5), random(0, 5));

    // External Forces
	this.applyForce = function(force) 
	{
        var f = force.copy();
        f.div(this.mass);
        this.acc.add(f);
    }

    // Behaviors
	this.seek = function(target) 
	{
        var desired = p5.Vector.sub(target, this.pos);
        desired.setMag(this.maxSpeed);
        var steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    // Handle Updates
	this.update = function() 
	{
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    // Draw
	this.display = function() 
	{
        colorMode(HSB);
        var theta = this.vel.heading() + PI / 2;
        fill(this.Hsl, this.hSl, this.hsL);
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
        rotate(theta);
        beginShape();
        vertex(0, -6);
        vertex(-6 / 2, 6);
        vertex(6 / 2, 6);
        endShape(CLOSE);
        pop();
    }

    // Handle Edges
	this.edges = function() 
	{
		if (this.pos.y > 850) 
		{
            this.pos.y = 850;
		} 
		else if (this.pos.y < 150) 
		{
            this.pos.y = 150;
        }
		if (this.pos.x > 1400) 
		{
            this.pos.x = 1400;
		} 
		else if (this.pos.x < 200) 
		{
            this.pos.x = 200;
        }
    }
}

// Correct Rotation
function correctRotation(deg) 
{
    /*
      Corrects a rotation and if it:
      exceed 360 degrees or is less than 0
    */
	if (deg > 360) 
	{
        deg -= 360;
	} 
	else if (deg < 0) 
	{
        deg += 360;
    }
    return (deg);
}

//mouse
function mousePressed()
{	
		if(mouseInPaintingRect())
	{
		if(num==1)
			brushStroke(R,G,B,shapesize(),framesize);
		else if(num==2)
			brushStroke_1(R,G,B,shapesize(),framesize);
		else if(num==3)
			brushStroke_2(R,G,B,shapesize(),framesize);
	}
	for (var j = 0; j < vehicles.length; j++) 
	{
        var explode = 10;
        vehicles[j].vel.add(random(0,10), random(0, 10));
    }
}

function mouseDragged()
{
	//print("mouseDragged:" + millis());	
	if(mouseInPaintingRect())
	{
		if(num==1)
			brushStroke(R,G,B,shapesize(),framesize);
		else if(num==2)
			brushStroke_1(R,G,B,shapesize(),framesize);
		else if(num==3)
			brushStroke_2(R,G,B,shapesize(),framesize);
	}
}


function mouseReleased()
{
	mouseDown=false;
	pushed=!pushed;
}

function mouseClicked()
{
	//print("mouseClicked:" + millis());
}

function doubleClicked()
{
	//print("doubleClicked:" + millis());
}

function touchStarted()
{
	//print("TouchStarted:" + millis());
}


function touchEnded()
{
	//print("touchEnded:" + millis());
}

function touchMoved()
{
	//print("touchMoved:" + millis());
}

// *************** 用键盘进行设置 ***************//
// 用0~9按键选择笔刷
// 用按键c清除画布
// 用按键s,l保存和读取(待实现)
var pressKey;
var pressKeyCode;

function keyPressed()
{
	pressKey = key;
	pressKeyCode = keyCode;
}


function keyReleased()
{
	
	if(pressKey=='S')
	{
		//print("Save(S)");
		//saveAsJson(circles);
	}
	else if(pressKey=="L")
	{
		//print("Load(L)");
		//loadFromJson("./save/circles.json");
	}
	else if(pressKey=="C")
	{
		circles = new Array();
		lines=new Array();
		triangles=new Array();
		push();
		noStroke();
		fill(255,7);
		rect(200,150,paintingWidth,paintingHeight);
		pop();
	}
	else if(pressKey=="X")
	{
		circles = new Array();
		lines=new Array();
		triangles=new Array();
		push();
		noStroke();
		fill(255);
		rect(200,150,paintingWidth,paintingHeight);
		pop();
		push();
		noStroke();
		fill(255,7);
		rect(200,150,paintingWidth,paintingHeight);
		pop();
	}
	else if(pressKey=="b")
	{
		
	}
	if(pressKeyCode == UP_ARROW)
	{
		if(num==1)
		{
			brushId ++;
		}
		else if(num==2)
		{
			brushId_1 ++;
		}
		else if(num==3)
		{
			brushId_2 ++;
		}
		PickBrushById();
	}
	else if(pressKeyCode == DOWN_ARROW)
	{
		if(num==1)
		{
			brushId --;
		}
		else if(num==2)
		{
			brushId_1 --;
		}
		else if(num==3)
		{
			brushId_2 --;
		}
		PickBrushById();
	}

	print("key:" + key + " keyCode:" + keyCode);
}

function PickBrushById()
{
	if(num==1)
	{
		
		if(brushId>=brushes.length)
	{
		brushId=0;
	}
	else if(brushId<0)
	{
		brushId = brushes.length-1
	}
	brushStroke = brushes[brushId];
	}
	else if(num==2)
	{
		if(brushId_1>=brushes_1.length)
	{
		brushId_1=0;
	}
	else if(brushId_1<0)
	{
		brushId_1 = brushes_1.length-1
	}
	brushStroke_1 = brushes_1[brushId_1];
	}
	else if(num==3)
	{
		if(brushId_2>=brushes_2.length)
	{
		brushId_2=0;
	}
	else if(brushId_2<0)
	{
		brushId_2 = brushes_2.length-1
	}
	brushStroke_2 = brushes_2[brushId_2];
	}
	
}



