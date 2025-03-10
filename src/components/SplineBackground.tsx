
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSplineLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="fixed inset-0 -z-10">
      {!isLoaded && (
        <div className="absolute inset-0 bg-karma-900 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-karma-gold border-t-transparent animate-spin"></div>
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/eNVml4KdqTm8XRnW/scene.splinecode"
        className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleSplineLoad}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-karma-900/50 via-transparent to-karma-900/90 pointer-events-none"></div>
    </div>
  );
};

export default SplineBackground;
