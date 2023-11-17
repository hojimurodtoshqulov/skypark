import { useScramble } from "use-scramble";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from "../InterSectionObserver";
// export const YourComponent = () => {
//   const onAnimationStart = useScramble(); // This function triggers the animation
//   // Your IntersectionObserver setup
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         onAnimationStart(); // Trigger animation when element is in view
//         observer.unobserve(entry.target); // Stop observing once animation starts
//       }
//     });
//   });
//   // Ref to the element to observe
//   const elementRef = React.useRef(null);
//   // Effect to start observing the element
//   React.useEffect(() => {
//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }
//     return () => observer.disconnect(); // Cleanup when component unmounts
//   }, []);

//   return (
//     <div ref={elementRef}>
//       {/* Your content */}
//     </div>
//   );
// };

const Scrambles = ({ text, speed }) => {
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
	const rereplay = () => {
		inter?.isIntersecting ? replay : ref;
	};
	// useEffect(()=>{
	// ref1
	// })
	console.log("ref1>>>", ref1.current);
	return (
		<span ref={ref1} id="inter section">
			<span ref={ref} onClick={replay}  />
		</span>
	);
};
export default Scrambles;
