
function oval(
	x,y, 
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
		
		//print("rotAngle:" + rotAngle)
		ellipse(0,0,this.size,this.size);
		pop();
	}
}




