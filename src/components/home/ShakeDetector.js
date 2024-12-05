import React, { useEffect, useState } from "react";

const ShakeDetector = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const shakingThreshold = 15;
    let lastX = null;
    let lastY = null;
    let lastZ = null;

    const handleMotion = (event) => {
      const acceleration = event.accelerationIncludingGravity;
      const currentX = acceleration.x;
      const currentY = acceleration.y;
      const currentZ = acceleration.z;

      if (lastX !== null && lastY !== null && lastZ !== null) {
        const deltaX = Math.abs(lastX - currentX);
        const deltaY = Math.abs(lastY - currentY);
        const deltaZ = Math.abs(lastZ - currentZ);

        if (
          deltaX > shakingThreshold ||
          deltaY > shakingThreshold ||
          deltaZ > shakingThreshold
        ) {
          console.log("Shake detected!");
          setCount((prev) => prev + 1);
          // You can handle the shake detection by invoking a function or updating state here
        }
      }

      lastX = currentX;
      lastY = currentY;
      lastZ = currentZ;
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleMotion);
    }

    return () => {
      if (window.DeviceMotionEvent) {
        window.removeEventListener("devicemotion", handleMotion);
      }
    };
  }, []);

  const handleVibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    } else {
      console.log("Vibration API is not supported on this device.");
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50">
      <span className="bg-white">{count}</span>
      <button className="border bg-blue-700 text-white" onClick={handleVibrate}>
        Vibrate Device
      </button>
    </div>
  );
};

export default ShakeDetector;
