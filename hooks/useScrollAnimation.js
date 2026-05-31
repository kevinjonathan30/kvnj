import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for scroll-triggered animations
 * @param {number} threshold - The intersection observer threshold (0-1)
 * @returns {Object} { ref, controls } - ref to attach to animated element, controls for motion animations
 */
export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return { ref, controls };
}
