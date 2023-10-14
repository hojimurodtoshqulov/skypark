import scss from "./video.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";
const Video = ({ src, height, imgSrc }) => {
	const [counter, setCounter] = useState(true);
	const ref = useRef();
	const refImg = useRef();
	const playVideo = (current) => {
		if (counter) {
			ref.current.play();
			refImg.current.style.setProperty("scale", "1.5");
			refImg.current.style.opacity = "0";
			setCounter(false);
		} else {
			ref.current.pause();
			refImg.current.style.opacity = "1";
			refImg.current.style.setProperty("scale", "1");
			setCounter(true);
		}
	};
	return (
		<div
			className={scss.video}
			onClick={playVideo}
			// style={{
			//   height: `${height}vh`,
			// }}  
		>
			<video src={src} poster={imgSrc} ref={ref} id="video">
				<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
			</video>
			<Image
				src="/images/Play.png"
				alt="Play"
				ref={refImg}
				width={60}
				height={60}
			/>
			{/* <img src="/images/Play.png" alt="Play" ref={refImg} /> */}
		</div>
	);
};

export default Video;
