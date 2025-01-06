import { EATER } from "@constants/constants";
import Particle from "@helper/Particle";

const speed = 5;

class Catcher {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.size = 20;
    this.direction = 0;
    this.color = "#58A9E8";
    this.eyeColor = "white";
    this.strokeColor = "white";
    this.mouthOpen = false;
  }
  update(course, count, updateCount) {
    const currentNode = course[count];
    const nextNode =
      course[
        count === 0
          ? course.length - 1
          : count === course.length - 1
          ? 0
          : count + 1
      ];
    if (currentNode.x === nextNode.x && currentNode.y < nextNode.y) {
      this.direction = 1;
      if (this.y + speed >= nextNode.y) {
        updateCount();
      }
    } else if (currentNode.x === nextNode.x && currentNode.y > nextNode.y) {
      this.direction = 3;
      if (this.y - speed <= nextNode.y) {
        updateCount();
      }
    } else if (currentNode.y === nextNode.y && currentNode.x < nextNode.x) {
      this.direction = 0;
      if (this.x + speed >= nextNode.x) {
        updateCount();
      }
    } else if (currentNode.y === nextNode.y && currentNode.x > nextNode.x) {
      this.direction = 2;
      if (this.x - speed <= nextNode.x) {
        updateCount();
      }
    }

    this.x += speed * EATER[this.direction].x;
    this.y += speed * EATER[this.direction].y;
  }
  draw(particlesArray) {
    particlesArray.push(new Particle(this.ctx, this));
    this.show();
  }
  show() {
    this.ctx.beginPath();
    if (this.mouthOpen) {
      this.ctx.arc(
        this.x,
        this.y,
        this.size,
        EATER[this.direction].mouth.start * Math.PI,
        EATER[this.direction].mouth.end * Math.PI
      );
    } else {
      this.ctx.arc(
        this.x,
        this.y,
        this.size,
        (EATER[this.direction].mouth.start + 0.15) * Math.PI,
        (EATER[this.direction].mouth.end - 0.2) * Math.PI
      );
    }
    this.ctx.lineTo(this.x, this.y);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(
      this.x - EATER[this.direction].eye.x,
      this.y - EATER[this.direction].eye.y,
      3,
      0,
      Math.PI * 2
    );
    this.ctx.fillStyle = this.eyeColor;
    this.ctx.fill();
    this.ctx.stroke();
  }
}

export default Catcher;
