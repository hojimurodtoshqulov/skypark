import { useScramble } from "use-scramble";

export const Scrambles = ({text}) => {
	const { ref } = useScramble({
		text: text,
		speed: 0.5,
		tick: 1,
		step: 1,
		scramble: 4,
		seed: 0,
	});

	return <p ref={ref} />;
};
export default Scrambles;