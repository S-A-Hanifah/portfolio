import React, { useEffect } from "react";
import "./Loading.css";

export default function Loading({ progress, setProgress, setIsLoading }) {
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
            setIsLoading(false);
          }
          return newProgress;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="loading">
      <div className="wait">
        <h2>Syed</h2>
        <div className="progressBar">
          {progress < 100 && <span style={{ width: `${progress}%` }}></span>}
        </div>
      </div>
    </div>
  );
}
