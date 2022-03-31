import { useEffect, useRef, useState } from 'react';

const useCountDown = (idx: number, initialCount: number) => {
    const intervalRef = useRef<number>()
    const [countDown, setCountDown] = useState(initialCount);

    useEffect(() => {
      if (idx === -1) return;

      intervalRef.current = window.setInterval(() => {
        setCountDown(count => {
          return count - 1;
        });
      }, 25);

      return cleanUp
	  }, [idx]);

    useEffect(() => {
      setCountDown(initialCount)
    }, [initialCount]);

    useEffect(() => {
      if (countDown === 0) {
          cleanUp();
      }
    }, [countDown])
    
    const cleanUp = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined;
        }
     }

    return countDown;
}

export default useCountDown