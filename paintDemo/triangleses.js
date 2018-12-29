function triangleses(
	x,y,radius, 
	amp, freq,phase,R,G,B,num,num1 )
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.amplitude = amp;
	this.frequence= freq;
	this.phase = phase;
	this.R=R;
	this.G=G;
	this.B=B;
	this.size=num;
	this.framesize=num1;
	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rBias = 
			this.amplitude * 
			sin(this.frequence * secs + this.phase);
		var r = this.radius + rBias;
		
		push();
		noStroke();
		if(this.framesize)
		{
			strokeWeight(this.framesize);
			stroke(0,0,0,50);
		}
		if(!this.R && !this.G && !this.B)
		{
			fill(0,10);
		}
		else{
			if (this.R==0 && this.G==10 && this.B==10)
			{
				fill(0,10);
			}
			else
				fill(this.R,this.G,this.B);
		}
		
		translate(this.x,this.y);
		rotate(0.8*secs);
		scale(r,r);
		triangle(-this.size/2,0,this.size/2,0,0,-this.size);
		pop();
		
	}
}
function triangleses_1(x,y, 
	rx, ax,fx,px,
	ry, ay,fy,py,
	angleSpd,
	phase,R,G,B,num,num1)
{
	this.x = x;
	this.y = y;

	this.rx = rx;
	this.ax = ax;
	this.fx = fx;
	this.px = px;
	
	this.ry = ry;
	this.ay = ay;
	this.fy = fy;
	this.py = py;

	this.angleSpd = angleSpd;
	this.size=num;
	this.phase = phase;
	this.R=R;
	this.G=G;
	this.B=B;
	this.framesize=num1;
	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rx = 
			this.rx + this.ax * sin(this.fx * secs + this.px + this.phase);
		var ry = 
			this.ry + this.ay * sin(this.fy * secs + this.py + this.phase);
		
		var rotAngle = this.angleSpd * secs;

		push();
		noStroke();
		if(this.framesize)
		{
			strokeWeight(this.framesize);
			stroke(0,0,0,50);
		}
		if(!this.R && !this.G && !this.B)
		{
			fill(0,10);
		}
		else{
			if (this.R==0 && this.G==10 && this.B==10)
			{
				fill(0,10);
			}
			else
				fill(this.R,this.G,this.B);
		}
		translate(this.x,this.y);
		rotate(rotAngle);
		scale(rx,ry);
		triangle(-this.size/2,0,this.size/2,0,0,-this.size);
		pop();
	}
}
function triangleses_2(
	x,y, 
	radius,
	ax,fx,px,
	ay,fy,py,
	phase,R,G,B,num,num1)
{
	this.x = x;
	this.y = y;

	this.radius = radius;
	
	this.ax = ax;
	this.fx = fx;
	this.px = px;
	
	this.ay = ay;
	this.fy = fy;
	this.py = py;

	this.phase = phase;
	this.R=R;
	this.G=G;
	this.B=B;
	this.size=num;
	this.framesize=num1;
	this.draw = function()
	{
		var secs = millis()/1000.0;

		var thetaX = this.fx * secs + this.px + this.phase;
		
		var xShift = 
			this.ax * sin(thetaX);
		var yShift = 
			this.ay * sin(this.fy * secs + this.py + this.phase);

		var xpos = this.x + xShift;
		var ypos = this.y + yShift;
		push();
		translate(xpos,ypos);
		scale(this.radius,this.radius);
		noStroke();
		if(this.framesize)
		{
			strokeWeight(this.framesize);
			stroke(0,0,0,50);
		}
		if(!this.R && !this.G && !this.B)
		{
			fill(0,5);
		}
		else{
			if (this.R==0 && this.G==10 && this.B==10)
			{
				fill(0,5);
			}
			else
				fill(this.R,this.G,this.B);
		}
		for(var i = 0;i<6;i++)
		{
			scale(0.85,0.85);
			triangle(-this.size/2,0,this.size/2,0,0,-this.size);
		}
	
		pop();
	}
}