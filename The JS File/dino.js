class Dino {
  
  constructor() {
    this.r = 100;
    this.s = 230;
    this.x = 50;
    this.y = height - this.s;
    this.vy = 0;
    this.gravity = 1;
  }

  jump() {
    if (this.y == height - this.s) {
      this.vy -= 20;
    }
  }

  hits(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    if (this.y >= height - this.s) {
      this.y = height - this.s;
      this.vy = 0;
    }
  }

  show() {
    image(uImg, this.x, this.y, this.r+30, this.r);
    
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);  
  }
}