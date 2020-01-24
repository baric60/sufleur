export type ControlProps<A = never> = {
	value: A;
	onValueChange: (value: A) => void;
	defaultValue?: A;
};
