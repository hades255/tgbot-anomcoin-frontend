import React, { useRef, useEffect } from "react";

const FireworksEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parentElement = canvas.parentElement;
    let rect = null;
    const setCanvasSize = () => {
      rect = parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

    const mouse = {
      x: null,
      y: null,
    };

    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.x - rect.left;
      mouse.y = event.y - rect.top;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
      }
    });

    canvas.addEventListener("touchmove", (event) => {
      mouse.x = event.touches[0].clientX - rect.left;
      mouse.y = event.touches[0].clientY - rect.top;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
      }
    });

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default FireworksEffect;
