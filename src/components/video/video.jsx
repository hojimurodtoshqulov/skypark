import scss from "./video.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";
const Video = ({ src, imgSrc, width, position, shadow, videoColor }) => {
	const [counter, setCounter] = useState(true);
	const ref1 = useRef();
	const ref2 = useRef();
	const refImg = useRef();
	const playVideo = (current) => {
		if (counter) {
			ref1.current.play();
			ref2.current.play();
			refImg.current.style.setProperty("scale", "1.5");
			refImg.current.style.opacity = "0";
			setCounter(false);
		} else {
			ref1.current.pause();
			ref2.current.pause();
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
			<video
				className={scss.videoMain}
				poster={imgSrc}
				ref={ref1}
				id="video"
				style={{ width: width, left: position, boxShadow: shadow }}
				width="100%"
				height="100%"
			>
				<source src={src} type="video/mp4" />
				<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
			</video>
			<video
				className={scss.videoBG}
				poster={imgSrc}
				ref={ref2}
				id="video"
				muted
			>
				<source src={src} type="video/mp4" />
				<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
			</video>
			<Image
				src="/images/Play.png"
				alt="Play"
				ref={refImg}
				width={60}
				height={60}
			/>
			<div className={scss.videoColor} style={{ background: videoColor }}></div>
		</div>
	);
};

export default Video;
