import { useEffect, useState } from 'react';
import './Progress.css';

const Progress: React.FC<{ progress: number }> = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 1000);
  }, [progress]);

  return (
    <div className='outer'>
      <div
        className='inner'
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          transition: 'transform 0.8s',
        }}
        role='progressbar'
        aria-valuemax={100}
        aria-valuemin={0}
        aria-label='progressbar'
      >
        {animatedProgress} %
      </div>
    </div>
  );
};

export default Progress;
