import Snowfall from 'react-snowfall';

export default function WinterEvent() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const isWinter = currentMonth === 0 || currentMonth === 11;

    if (isWinter) {
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