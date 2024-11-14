import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { autoCatcherMove } from "@redux/coinSlice";

const Auto = ({ auto }) => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!auto) {
      cancelAnimationFrame(animationRef.current);
      return;
    }
    const canvas = canvasRef.current;
    const parentElement = canvas.parentElement;
    let rect = null;
    let course = [];
    let count = 0;
    const setCanvasSize = () => {
      rect = parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      const steps = Math.ceil(rect.height / 100);
      course = [{ x: 50, y: 50 }];
      let i = 0;
      while (i < steps) {
        course.push({
          x: i % 2 === 0 ? rect.width - 50 : 50,
          y: i * 100 + 50 > rect.height ? rect.height - 50 : i * 100 + 50,
        });
        if (i + 1 < steps) {
          course.push({
            x: i % 2 === 0 ? rect.width - 50 : 50,
            y:
              (i + 1) * 100 + 50 > rect.height
                ? rect.height - 50
                : (i + 1) * 100 + 50,
          });
        }
        i++;
      }
      course = [...course, ...course.slice(1, course.length - 1).reverse()];
      count = 0;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    const ctx = canvas.getContext("2d");
    const updateCount = () => {
      count = (count + 1) % course.length;
    };
    //** start auto catcher code */
    class Catcher {
      constructor() {
        this.x = 50;
        this.y = 50;
        this.size = 20;
        this.speedX = 3;
        this.speedY = 0;
        this.color = "#58A9E8";
      }
      update() {
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
          this.speedX = 0;
          this.speedY = 3;
          if (this.y + this.speedY >= nextNode.y) {
            updateCount();
          }
        } else if (currentNode.x === nextNode.x && currentNode.y > nextNode.y) {
          this.speedX = 0;
          this.speedY = -3;
          if (this.y + this.speedY <= nextNode.y) {
            updateCount();
          }
        } else if (currentNode.y === nextNode.y && currentNode.x < nextNode.x) {
          this.speedX = 3;
          this.speedY = 0;
          if (this.x + this.speedX >= nextNode.x) {
            updateCount();
          }
        } else if (currentNode.y === nextNode.y && currentNode.x > nextNode.x) {
          this.speedX = -3;
          this.speedY = 0;
          if (this.x + this.speedX <= nextNode.x) {
            updateCount();
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, "#3377FF");
        gradient.addColorStop(1, this.color);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const catcher = new Catcher();
    const handleCatcher = () => {
      catcher.update();
      catcher.draw();
      dispatch(autoCatcherMove({ x: catcher.x, y: catcher.y }));
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleCatcher();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    //** end */
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [dispatch, auto]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default Auto;
