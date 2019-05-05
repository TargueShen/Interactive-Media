class Sun{
  float radius;
  float orbitspeed;
  float angle;
  PShape globe;
  PVector v;
  Sun(float r,float o){
    v=PVector.random3D();
    radius=r;
    orbitspeed=o;
    angle=0;
    v.mult(r);
    noStroke();
    globe=createShape(SPHERE,radius);
    globe.setTexture(img);
  }
  
  void rotating(){
    angle=angle+orbitspeed;
    
  }
  
  void show(){
    noStroke();
    pushMatrix();
    noStroke();
    fill(255,120);
    rotate(angle,v.x,v.y,v.z);
    shape(globe);
    popMatrix();
  }
}
