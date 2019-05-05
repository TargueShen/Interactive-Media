import peasy.*;
import java.util.*;
PeasyCam cam;

PImage img;
PImage[] pimgs=new PImage[8];

Planet[] planet=new Planet[8];
Sun sun;
ArrayList<Meteor> meteors;

String[] name={"Mecury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"};
String[] path={"Mecury.jpg","Venus.jpg","Earth.jpg","Mars.jpg","Jupiter.jpg","Saturn.jpg","Uranus.jpg","Neptune.jpg"};

float[] radius=new float[8];

float[] distance=new float[8];
float[] rev=new float[8];
float[] auto=new float[8];
PVector[] towards=new PVector[8];
float[] def=new float[8];
float[] far=new float[8];
float[] e=new float[8];
float[] p=new float[8];

int amount=1000;
int[] x=new int[amount];
int[] y=new int[amount];
int[] z=new int[amount];


void getRadius(){
  radius[0]=4;
  radius[1]=radius[0]*2.5;
  radius[2]=radius[0]*2.6;
  radius[3]=radius[0]*1.4;
  radius[4]=radius[0]*29.3;
  radius[5]=radius[0]*24.7;
  radius[6]=radius[0]*10.4;
  radius[7]=radius[0]*10.2;
}

void getDistance(){
  distance[0]=18;
  distance[1]=distance[0]*1.87;
  distance[2]=distance[0]*2.58;
  distance[3]=distance[0]*3.94;
  distance[4]=distance[0]*13.44;
  distance[5]=distance[0]*24.68;
  distance[6]=distance[0]*49.58;
  distance[7]=distance[0]*77.78;
}

void getAuto(){
  auto[0]=0.000102;
  auto[1]=auto[0]/243.01*58.65;
  auto[2]=auto[0]*58.65;
  auto[3]=auto[0]/1.03*58.65;
  auto[4]=auto[0]/0.41*58.65;
  auto[5]=auto[0]/0.426*58.65;
  auto[6]=auto[0]/0.646*58.65;
  auto[7]=auto[0]/0.658*58.65;
}

void getRev(){
  rev[0]=1;
  rev[1]=rev[0]/2.56;
  rev[2]=rev[0]/4.15;
  rev[3]=rev[0]/7.81;
  rev[4]=rev[0]/49.19;
  rev[5]=rev[0]/122.19;
  rev[6]=rev[0]/348.41;
  rev[7]=rev[0]/680.23;
}

void getDeflection(){
  def[0]=1;
  def[1]=def[0]*2;
  def[2]=def[0]*3;
  def[3]=def[0]*4;
  def[4]=def[0]*5;
  def[5]=def[0]*6;
  def[6]=def[0]*7;
  def[7]=def[0]*8;
          
}

void getE(){
  e[0]=0.205627;
  e[1]=0.006811;
  e[2]=0.016675;
  e[3]=0.093334;
  e[4]=0.048912;
  e[5]=0.053927;
  e[6]=0.043154;
  e[7]=0.01125;
}

void getP(){
  for(int i=0;i<8;i++)
    p[i]=(distance[i]+283)/(1+e[i]);
}

void addmap(){
  for(int i=0;i<8;i++){
    pimgs[i]=loadImage(path[i]);
  }
}

void setup(){
  size(1500,1000,P3D);
  
  img=loadImage("Sun.jpg");
  background(10);
  
  cam=new PeasyCam(this,600);
  emissive(247,238,214);
  sun =new Sun(283,0.0001*PI);
  emissive(10);
  meteors=new ArrayList<Meteor>();;
  
  getDistance();
  getRadius();
  addmap();
  getAuto();
  getRev();
  getDeflection();
  getE();
  getP();
  for(int i=0;i<8;i++){
    float dis=p[i]/(1+e[i]);
    planet[i]=new Planet(radius[i],dis,distance[i]+283,auto[i],rev[i],def[i],e[i],p[i],pimgs[i]);
  }
  
  noFill();
  stroke(255);
  strokeWeight(1);
  for(int i=0;i<amount;i++){
    x[i]=int(random(-2500,2500));
    y[i]=int(random(-2500,2500));
    z[i]=int(random(-2500,2500));
  }
}



void draw(){
  background(10);
  noFill();
  lights();
  stroke(255);
  //box(300);
  strokeWeight(1);

  for(int i=0;i<amount;i++){
    point(x[i],y[i],z[i]);
  }
  sun.rotating();
  sun.show();
 

  for(int i=0;i<8;i++){
    
    planet[i].rotating();
    planet[i].revols();
    planet[i].show();
    planet[i].update();
    }
  meteors.add(new Meteor(new PVector(random(distance[3]+2*radius[3],distance[4])+283,0,0),1));
  meteors.add(new Meteor(new PVector(random(-distance[4]-283,-distance[3]+2*radius[3])-283,0,0),-1));
  meteors.add(new Meteor(new PVector(0,random(-distance[4],-distance[3]+2*radius[3])-283,0),-1));
  meteors.add(new Meteor(new PVector(0,random(distance[3]+2*radius[3],distance[4])+283,0),1));
  Iterator<Meteor> it=meteors.iterator();
  while(it.hasNext()){
    Meteor p=it.next();
    p.run();
    if(p.isDead()) it.remove();
  };
 }

void mouseWheel(){
  
}
void keyPressed(){
  
  if(keyCode==UP){
    for(int i=0;i<8;i++){
      planet[i].revoles=planet[i].revoles*5;
    }
 
  }
  if(keyCode==DOWN){
    for(int i=0;i<8;i++){
      planet[i].revoles=planet[i].revoles/5;
    }
  }
  if(keyCode==LEFT){
    for(int i=0;i<8;i++){
      planet[i].revoles=planet[i].revoles*1.1;
    }
  }
  if(keyCode==RIGHT){
    for(int i=0;i<8;i++){
      planet[i].revoles=planet[i].revoles/1.1;
    }  
}
  if(key=='F'){
     for(int i=0;i<8;i++){
       planet[i].revoles=rev[i];
     }
  }
}
