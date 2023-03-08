class Car {
    constructor(ctx) {
    this.x = 225;
    this.y = 575;
    this.width = 50;
    this.height = 100;
    this.img = new Image ();
    this.img.src = "/lab-canvas-race-car/images/car.png";
    this.ctx = ctx;
    }

    draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
    if (this.x <= 0) return;
    else this.x -= 1;
    };

    moveRight() {
    if (this.x + this.width >= canvas.width) return;
    else this.x += 1;
    }
}

export default Car;
