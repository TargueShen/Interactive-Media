function ColorBtn(X, Y, W, H, givenR, givenG, givenB) {
    this.x = X;
    this.y = Y;
    this.w = W;
    this.h = H;
    this.R;
    this.G;
    this.B;
    this.r =givenR;
    this.g =givenG;
    this.b =givenB;
  }
  ColorBtn.prototype.isMouseInBtn = function() {
    if (mouseX >= this.x && mouseX <= this.x + this.w &&
      mouseY >= this.y && mouseY <= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
  ColorBtn.prototype.onclick = function() {
if(mouseIsPressed)
  {
    this.R=this.r;
    this.G=this.g;
    this.B=this.b;
    return true;
  }
}
ColorBtn.prototype.displayBtn = function() {
    stroke(0);
    strokeWeight(1);
    fill(this.r * 1.5, this.g * 1.5, this.b * 1.5);
    rect(this.x, this.y, this.w, this.h, 5);
}
  