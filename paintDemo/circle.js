
function circle(
	x,y,radius, 
	amp, freq, phase,R,G,B,num,num1)
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
		scale(r,r);
		ellipse(0,0,this.size,this.size);
		pop();
		
	}
	this.toJson = function()
	{
		var jsonObj = {};
		jsonObj.x = this.x;
		jsonObj.y = this.y;
		jsonObj.radius = this.radius;
		jsonObj.amplitude = this.amplitude;
		jsonObj.frequence = this.frequence;
		jsonObj.phase = this.phase;
		return jsonObj;
	}

	this.fromJson = function(jsonObj)
	{
		this.x = jsonObj.x;
		this.y = jsonObj.y;
		this.radius = jsonObj.radius;
		this.amplitude = jsonObj.amplitude;
		this.frequence = jsonObj.frequence;
		this.phase = jsonObj.phase;
	}
	this.update=function(){
		
	}	

}

function circleBlur(
	x,y,radius, 
	amp, freq, phase,R,G,B,num ,num1)
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
		translate(this.x,this.y);
		scale(r,r);
		var i=10;
		do{
			fill(0,random(1,8));
			ellipse(0,0,this.size,this.size);
			scale(0.9,0,9);
			i--;
		}while(i>0)
		
		pop();
	}

}


function circleBlurInteractive(
	x,y,radius, 
	amp, freq, phase,
	senseRadius,R,G,B,num,num1 )
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.amplitude = amp;
	this.frequence= freq;
	this.phase = phase;
	this.senseRadius = senseRadius;
	this.R=R;
	this.G=G;
	this.B=B;
	this.size=num;
	this.pointX = 10000;
	this.pointY = 10000;
	this.framesize=num1;
	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rBias = 
			this.amplitude * 
			sin(this.frequence * secs + this.phase);
		var r = this.radius + rBias;

		var dx = this.pointX - this.x;
		var dy = this.pointY - this.y;
		var dist = sqrt(dx*dx + dy*dy);
		var distC = constrain(dist,0,this.senseRadius);
		var dist01 = distC/senseRadius;

		var r2 = r / (1.1-dist01);

		push();
		noStroke();
		if(!this.R && !this.G && !this.B)
		{
			fill(0,4);
		}
		else{
			if (this.R==0 && this.G==10 && this.B==10)
			{
				fill(0,4);
			}
			else
				fill(this.R,this.G,this.B);
		}
		translate(this.x,this.y);
		scale(r2,r2);
		var i=10;
		do{
			fill(0,(1.05-dist01)*random(10,20));
			ellipse(0,0,this.size,this.size);
			scale(0.9,0,9);
			i--;
		}while(i>0)
		
		pop();
	}

	this.pointerMove = function(pointx,pointy)
	{
		//print("pointerMove");
		this.pointX = pointx;
		this.pointY = pointy;
	}

}
