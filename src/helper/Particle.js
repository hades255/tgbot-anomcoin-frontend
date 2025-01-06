const colors = ["#58A9E8", "#13A0FF"];

class Particle {
  constructor(ctx, pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.ctx = ctx;
    this.size = Math.random() * 6 + 5;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.2;
  }
  draw() {
    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size
    );
    gradient.addColorStop(0, "#FFF");
    gradient.addColorStop(1, this.color);

    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export default Particle;
