import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiCannon = () => {
  useEffect(() => {
    const fire = (particleRatio, opts) => {
      confetti(
      
      );
    };

    const confettiExplosion = (origin) => {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        origin,
      });
      fire(0.2, {
        spread: 60,
        origin,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        origin,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        origin,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        origin,
      });
    };

    const handleClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      const origin = {
        x: center.x / window.innerWidth,
        y: center.y / window.innerHeight,
      };

    
      confettiExplosion(origin);
    };

    const triggers = document.querySelectorAll('.js-confetti');

    Array.from(triggers).forEach((trigger) => {
      trigger.addEventListener('click', handleClick);
    });

    return () => {
      Array.from(triggers).forEach((trigger) => {
        trigger.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return <></>;
};

export default ConfettiCannon;
