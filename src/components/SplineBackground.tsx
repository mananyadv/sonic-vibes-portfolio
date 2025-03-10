
import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Spline 
        scene="https://prod.spline.design/eNVml4KdqTm8XRnW/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
};

export default SplineBackground;
