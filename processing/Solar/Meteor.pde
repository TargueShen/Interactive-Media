class Meteor{
  PVector location;
  float theta;
  float lifespan;
  PShape globe;
  float zf;
  Meteor(PVector l,float n){
    location=l;
    theta=0;
    lifespan=255.0;
    zf=n;
    globe=createShape(SPHERE,2);
  }
  void update(){
    theta+=10;
    if(zf>0) location.add(new PVector(1,1,1));
    else location.add(new PVector(-1,-1,-1));
    lifespan-=2.0;
  }
  //void limit(){
  //  if(location.x>distance[4]+283
  //}
  void display(){
    stroke(0,lifespan);
    fill(0,lifespan);
    pushMatrix();
    translate(location.x,location.y,location.z);
    shape(globe);
    popMatrix();
  }
  boolean isDead(){
    if(lifespan<0){
      return true;
    }
    else{
      return false;
    }
  }
  void run(){
    update();
    display();
  }
}
