import React, { useEffect, useRef, useState } from "react";
import "./FpsComponent.css";

const FpsComponent = () => {
  const fpsCounterRef = useRef();
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastFrameTime = useRef(performance.now());

  useEffect(() => {
    function calculateFPS() {
      const now = performance.now();
      frameCount.current++;

      const delta = now - lastFrameTime.current;

      if (delta >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastFrameTime.current = now;
      }

      requestAnimationFrame(calculateFPS);
    }

    calculateFPS();

    return () => {
      cancelAnimationFrame(calculateFPS);
    };
  }, []);

  return (
    <div>
      <div id="fps-counter" ref={fpsCounterRef}>
        FPS: {fps}
      </div>
    </div>
  );
};

export default FpsComponent;
