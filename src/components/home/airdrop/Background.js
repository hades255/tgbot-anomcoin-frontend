import React, { useEffect, useMemo, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const background = useMemo(() => new Image(), []);
  background.src = "/background.png";

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

    const drawBackground = () => {
      ctx.drawImage(
        background,
        Math.round(Math.random() * 20 - 20),
        Math.round(Math.random() * 20 - 20),
        canvas.width + 20,
        canvas.height + 20
      );
      animationRef.current = requestAnimationFrame(drawBackground);
    };

    background.onload = () => {
      if (animationRef.current) return;
      drawBackground();
    };

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [background]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

export default Background;
