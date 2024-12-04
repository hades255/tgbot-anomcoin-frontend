import React, { useRef, useEffect } from "react";
import Particle from "./Particle";

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

    const mouse = {
      x: null,
      y: null,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x - rect.left;
      mouse.y = event.y - rect.top;
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle(ctx, mouse));
      }
    });

    window.addEventListener("touchmove", (event) => {
      mouse.x = event.touches[0].clientX - rect.left;
      mouse.y = event.touches[0].clientY - rect.top;
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle(ctx, mouse));
      }
    });

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
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("touchmove", () => {});
    };
  }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-transparent">
      <canvas
        ref={canvasRef}
        style={{ display: "block", backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default FireworksEffect;
