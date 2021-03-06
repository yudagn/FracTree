class RandomLeaf {
    constructor(ctx, length, color) {
      this.ctx = ctx;
      this.length = length;
      this.color = color;
      this.drawLeaf();
    }
  
    drawLeaf() {
      this.ctx.strokeStyle = this.color;
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
 
      let randNum1 = Math.floor(Math.random() * 20) + 1;
      let randNum2 = Math.floor(Math.random() * 8) + 2;
      this.ctx.arc(0, -this.length, randNum1, 5, Math.PI / randNum2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }
  
  export default RandomLeaf;

  