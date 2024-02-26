import { useImmer } from "use-immer";

export const useImmutable = <S = any>(initialValue: S | (() => S)) => {
	const [value, update] = useImmer(initialValue);

	return {
		value,
		update,
	};
};
