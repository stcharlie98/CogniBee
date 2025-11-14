import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ targetValue, duration = 1500, unit = '', prefix = '', suffix = '', decimals = 1 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const frameRate = 1000 / 60; // 60 FPS
  const totalFrames = Math.round(duration / frameRate);
  
  // Use a ref to store targetValue to avoid issues with stale closures in setInterval
  const targetValueRef = useRef(targetValue);
  useEffect(() => {
    targetValueRef.current = targetValue;
  }, [targetValue]);

  useEffect(() => {
    // If targetValue is 0 or not a number, display it immediately without animation
    if (typeof targetValueRef.current !== 'number' || isNaN(targetValueRef.current)) {
      setCurrentValue(targetValueRef.current || 0); // Display 0 if NaN or undefined
      return;
    }
    if (targetValueRef.current === 0) {
        setCurrentValue(0);
        return;
    }


    let frame = 0;
    // Decide starting point: if current value is already set (e.g. from a previous animation or different target),
    // and it's a number, start from there for a smoother transition if target changes. Otherwise start from 0.
    const initialDisplayValue = (typeof currentValue === 'number' && !isNaN(currentValue)) ? currentValue : 0;
    // However, for this specific count-up-from-zero effect on load, we always start from 0.
    // If you wanted it to animate from previous value to new target, initialDisplayValue would be used.
    const startValue = 0; 
    setCurrentValue(startValue); // Ensure we start from 0 visually

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Simple linear interpolation
      let nextValue = startValue + (targetValueRef.current - startValue) * progress;

      if (frame >= totalFrames) {
        setCurrentValue(targetValueRef.current);
        clearInterval(counter);
      } else {
        setCurrentValue(nextValue);
      }
    }, frameRate);

    return () => {
      clearInterval(counter);
    };
  // Rerun effect if targetValue or duration changes.
  // Exclude currentValue from dependencies to prevent re-triggering on its own updates.
  }, [targetValue, duration]); // targetValue is now implicitly handled by targetValueRef updates

  const displayValue = typeof currentValue === 'number' ? currentValue.toFixed(decimals) : (currentValue || '0');

  return (
    <>
      {prefix}
      {displayValue}
      {suffix}
      {unit && ` ${unit}`}
    </>
  );
};

export default AnimatedNumber; 