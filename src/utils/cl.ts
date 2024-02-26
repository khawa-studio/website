type Names = string | Record<string, boolean> | Array<Names>;

/**
 * React 组件类名生成器
 */
export const cl = (...names: Names[]): string => {
	const classNames: string[] = [];

	for (const name of names) {
		if (typeof name === "string") {
			classNames.push(name);
		} else if (Array.isArray(name)) {
			classNames.push(cl(...name));
		} else {
			for (const key in name) {
				name[key] && classNames.push(key);
			}
		}
	}

	return classNames.join(" ");
};
