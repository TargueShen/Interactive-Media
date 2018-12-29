function splash(
	x,y, 
	dotRadius,
	dotRadiusVar,
	distVar,
	density,R,G,B,num,num1)
{
	this.x = x;
	this.y = y;

	this.dotRadius = dotRadius;
	this.dotRadiusVar = dotRadiusVar;

	this.distVar = distVar;
	this.density = density;
	this.R=R;
	this.G=G;
	this.B=B;
	this.size=num;
	this.framesize=num1;
	this.draw = function()
	{
		var secs = millis()/1000.0;
		
		var xShift = 0;
		var yShift = 0;

		var xpos = this.x + xShift;
		var ypos = this.y + yShift;
		
		push();
		translate(xpos,ypos);
		scale(this.radius,this.radius);

		noStroke();
		//ellipse(xpos,ypos,5,5);
		
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
		for(var i = 0;i<6;i++)
		{
			ellipse(0,0,this.size,this.size);
			scale(0.85,0.85);
		}
		//ellipse(0,0,1,1);
		pop();
		
		/*
		push();
		fill(255,0,0);
		ellipse(this.x,this.y,50,50);
		pop();
		*/

		//print("this.fx :" + this.fx  + " ys:" + yShift);
	}
}




