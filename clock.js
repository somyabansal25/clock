import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update time
    const updateClock = () => {
      setTime(new Date());
    };

    // Set interval to update every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '2em', fontFamily: 'monospace' }}>
      {formattedTime}
    </div>
  );
}

export default DigitalClock;