class Obstacles {
    constructor (ctx, canvas) {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.width = (Math.random() * canvas.width) / 3;
    this.height = 30; 
    this.color = 'red';
    this.ctx = ctx; 
}

draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.fillStyle = this.color;
}
move() {
    this.y += 10;
  }

}

export default Obstacles;