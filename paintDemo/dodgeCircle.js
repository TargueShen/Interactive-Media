

function dodgeCircle(
	x,y,radius,
	senseRadius,R,G,B,num)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.senseRadius = senseRadius;
	this,R=R;
	this.G=G;
	this.B=B;
	this.pointX = 10000;
	this.pointY = 10000;
	this.size=num;
	this.draw = function()
	{
		//this.pointX = mouseX;
		//this.pointY = mouseY;

		var secs = millis()/1000.0;
		
		var dx = this.pointX - this.x;
		var dy = this.pointY - this.y;
		var dist = sqrt(dx*dx + dy*dy);
		var distC = constrain(dist,0,this.senseRadius);
		//var bDodging = (dist<=this.senseRadius);

		var xShift = 0;
		var yShift = 0;
		
		var dodgingPwr = 
		1.05 - distC/this.senseRadius;
		var dodgintDist = 
			random(dodgingPwr) * this.senseRadius;
		var dodgingTheta = random(TWO_PI);
		xShift = dodgintDist * cos(dodgingTheta);
		yShift = dodgintDist * sin(dodgingTheta);
		
		
		var x = this.x + xShift;
		var y = this.y + yShift;

		var r = this.radius * sqrt(dodgingPwr);
		
		push();
		noStroke();
		fill(0,0,0,(1-0.95*sqrt(dodgingPwr))*150);

		translate(x,y);
		scale(r,r);

		ellipse(0,0,this.size,this.size);
		pop();
		
		
	}

	this.pointerMove = function(pointx,pointy)
	{
		
		this.pointX = pointx;
		this.pointY = pointy;
	}



}





