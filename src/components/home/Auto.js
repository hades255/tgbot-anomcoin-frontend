import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { autoCatcherMove } from "@redux/coinSlice";
import Catcher from "@helper/Catcher";

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
    let particlesArray = [];

    const catcher = new Catcher(ctx);
    const handleCatcher = () => {
      catcher.update(course, count, updateCount);
      catcher.draw(particlesArray);
      dispatch(autoCatcherMove({ x: catcher.x, y: catcher.y }));
    };

    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(course, count, updateCount);
        particlesArray[i].draw(particlesArray);
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      handleCatcher();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    const timerEater = setInterval(() => {
      catcher.mouthOpen = !catcher.mouthOpen;
    }, 200);
    //** end */
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationRef.current);
      clearInterval(timerEater);
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
