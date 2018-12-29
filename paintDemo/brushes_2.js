var brushes_2=[
    triangle_straight,//0
    triangle_straight_1,//1
    triangle_straight_2,//2
    triangle_straight_3,//3
    triangle_straight_4,//4
    triangle_straight_5,//5
];
function triangle_straight(R,G,B,num,num1){
    var phase = millis()/30;
    append(triangles, new triangleses(mouseX,mouseY,10,6,1,phase,R,G,B,num,num1));
}
function triangle_straight_1(R,G,B,num,num1){
    var r = random(0,1);
    var a = random(8,16);
    var f = random(15,30);
    var phase = random(millis()/30,millis()/300);
    append(triangles, new triangleses(mouseX,mouseY,r,a,f,phase,R,G,B,num,num1));
}
function triangle_straight_2(R,G,B,num,num1){
    var r = random(0,1);
    var a = random(8,16);
    var f = 2;
    var phase = 0;
    append(triangles, new triangleses(mouseX,mouseY,r,a,f,phase,R,G,B,num,num1));
}
function triangle_straight_3(R,G,B,num,num1)
{
  var r = 10;
  var a = 5;
  var f = 1;
  var phase = 0;
  append(triangles, new triangleses(mouseX,mouseY,r,a,f,phase,R,G,B,num,num1));
}
function triangle_straight_4(R,G,B,num,num1)
{
    var rx = 8;
    var ax = 5;
    var fx = 2;
    var px = 0;
    
    var ry = 8;
    var ay = 5;
    var fy = 2;
    var py = TWO_PI/8;
  
    var angSpd = PI;
  
    var phase = millis()/200;
    
    append(triangles, 
      new triangleses_1(mouseX,mouseY,
        rx,ax,fx,px,
        ry,ay,fy,py,
        angSpd,phase,R,G,B,num,num1));
}

function triangle_straight_5(R,G,B,num,num1)
{
  var radius = random(20,40);
  var ax = random(6,12);
  var fx = 2.5;
  var px = 0;
  var ay = random(6,12);
  var fy = 2.5;
  var py = TWO_PI/4;
  var phase = millis()/200;

  
  append(triangles, 
    new triangleses_2(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase,R,G,B,num,num1));
}