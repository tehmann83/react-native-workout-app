import { useEffect, useRef, useState } from 'react';

const useCountDown = (idx: number, initialCount: number = -1) => {
	const intervalRef = useRef<number>();
	const [countDown, setCountDown] = useState(initialCount);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (idx === -1) return;

		if (isRunning && !intervalRef.current) {
			intervalRef.current = window.setInterval(() => {
				setCountDown(count => {
					return count - 1;
				});
			}, 25);
		}

		return cleanUp;
	}, [idx, isRunning]);

	useEffect(() => {
		setCountDown(initialCount);
	}, [initialCount]);

	useEffect(() => {
		if (countDown === 0) {
			cleanUp();
		}
	}, [countDown]);

	const cleanUp = () => {
		if (intervalRef.current) {
			setIsRunning(false);
			window.clearInterval(intervalRef.current);
			intervalRef.current = undefined;
		}
	};

	return {
		countDown,
		isRunning,
		stop: cleanUp,
		start: (count?: number) => {
			setCountDown(count ?? initialCount);
			setIsRunning(true);
		}
	};
};

export default useCountDown;
