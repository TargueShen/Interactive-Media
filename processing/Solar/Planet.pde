class Planet{
  float radius;
  float orbitspeed;
  float distance;
  float angle;
  float revol;
  float revoles;
  float deflection;
  float ecce;
  float pr;
  float main;
  float dis;
  PShape globe;
  PVector v;
  PImage image;
  Planet(float r,float ds,float d,float o,float re,float de,float e,float p,PImage i){
    v=new PVector(1,0,0);
    radius=r;
    distance=d;
    image=i;
    orbitspeed=o;
    angle=0;
    revol=180/360*PI;
    revoles=re;
    deflection=de;
    ecce=e;
    pr=p;
    dis=ds;
    main=d;
    v.mult(r);
    noStroke();
    globe=createShape(SPHERE,radius);
    globe.setTexture(image);
  }
  
  void update(){
    float dss=pr/(1-ecce*cos(revol));
    main=dss*distance/dis;
    //println(distance);
  }
  void rotating(){
    angle=angle+orbitspeed*PI;
  }
  
  void revols(){
    revol=revol+PI/360*revoles;
    //b revol=0;
  }
  
  
  void show(){
    rotateX(deflection);
    
    float R=v.x+main;
    stroke(255);
    noFill();
    ellipse(0,0,R*2,R*2);
    //point(R*cos(revol),R*sin(revol),0);
    //println(R);
    pushMatrix();
    noStroke();
    fill(255,120);
    translate(R*cos(revol),R*sin(revol),0);
    rotateY(angle);
    shape(globe);
    popMatrix();
    
    }
}
