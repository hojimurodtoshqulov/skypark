import { useScramble } from "use-scramble";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from "../InterSectionObserver";
export const Scrambles = ({ text, speed }) => {
	const [overdrive, setOverdrive] = useState(false);
	const ref1 = useRef(null);
	const inter = useIntersectionObserver(ref1, {});
	console.log(inter?.isIntersecting);
	const { ref, replay } = useScramble({
		text: text,
		speed: speed,
		tick: 2,
		step: 1,
		scramble: 2,
		seed: 0,
		overdrive: overdrive,
		overflow: false,
		range: [32, 64],
		// onAnimationStart: (param) => (inter?.isIntersecting ? !param : !param),
	});
	return (
		<span ref={ref1}>
			<span ref={ref} onClick={replay} />
		</span>
	);
};
export default Scrambles;
