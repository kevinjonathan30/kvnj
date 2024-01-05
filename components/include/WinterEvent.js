import Snowfall from 'react-snowfall';
import { useEffect, useState } from 'react';

export default function WinterEvent() {
    const [shouldRenderSnowfall, setShouldRenderSnowfall] = useState(false);

    const modeMe = (e) => {
        setShouldRenderSnowfall(!e.matches);
    };

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const isWinter = currentMonth >= 0 && currentMonth <= 2 || currentMonth === 11;

        const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
        const prefersReducedMotion = matchMedia.matches;

        if (isWinter && !prefersReducedMotion) {
            setShouldRenderSnowfall(true);
        } else {
            setShouldRenderSnowfall(false);
        }

        matchMedia.addEventListener("change", modeMe);
        return () => matchMedia.removeEventListener("change", modeMe);
    }, []);

    if (shouldRenderSnowfall) {
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
}