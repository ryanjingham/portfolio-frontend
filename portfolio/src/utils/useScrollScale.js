import { useState, useEffect } from 'react';

function useScrollScale() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateScale = (elementRef) => {
    if (!elementRef.current) return { transform: 'scale(1)', transition: 'transform 0.5s ease-out' };

    const elementTop = elementRef.current.getBoundingClientRect().top + window.scrollY;
    const distanceToElement = Math.abs(window.scrollY + window.innerHeight / 2 - elementTop);
    const scale = Math.max(1, 1.5 - distanceToElement / 1000);

    return {
      transform: `scale(${Math.min(scale, 1.5)})`,
      transition: 'transform 0.5s ease-out',
    };
  };

  return { scrollY, calculateScale };
}

export default useScrollScale;