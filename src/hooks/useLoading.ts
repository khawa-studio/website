import { useState } from "react";

export const useLoading = (initialValue = false) => {
	const [loading, setLoading] = useState(initialValue);

	const wrapAsyncFunction = <A extends unknown[], R>(
		func: (...args: A) => Promise<R>,
	) => {
		return (...args: A) => {
			setLoading(() => true);

			return func(...args).finally(() => {
				setLoading(() => false);
			});
		};
	};

	return {
		value: loading,
		update: setLoading,
		wrapAsyncFunction,
	};
};
