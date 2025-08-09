// WinterEvent: Shows animated snowfall in winter months unless reduced motion is preferred
import Snowfall from 'react-snowfall';
import { useEffect, useState } from 'react';

export default function WinterEvent() {
    const [shouldRenderSnowfall, setShouldRenderSnowfall] = useState(false);

    // Toggle snowfall based on reduced motion preference
    const handleMotionChange = (e) => {
        setShouldRenderSnowfall(!e.matches);
    };

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const isWinter = (currentMonth >= 0 && currentMonth <= 2) || currentMonth === 11;

        const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
        const prefersReducedMotion = matchMedia.matches;

        setShouldRenderSnowfall(isWinter && !prefersReducedMotion);

        matchMedia.addEventListener('change', handleMotionChange);
        return () => matchMedia.removeEventListener('change', handleMotionChange);
    }, []);

    if (!shouldRenderSnowfall) return null;

    return (
        <Snowfall
            snowflakeCount={50}
            speed={[0.1, 1.0]}
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
            }}
        />
    );
}