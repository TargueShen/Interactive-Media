class MeteorSystem{
  ArrayList<Meteor> meteors;
  MeteorSystem(){
    meteors=new ArrayList<Meteor>();
  }
  
  void addMeteor(){
    //meteors.add(new Meteor(new PVector(random(distance[3]+2*radius[3]+283),0,0)));
  }
  
  void run(){
    Iterator<Meteor> it=meteors.iterator();
    while(it.hasNext()){
      Meteor p=it.next();
      p.run();
      if(p.isDead()){
        it.remove();
      }
    }
    
  }
}
