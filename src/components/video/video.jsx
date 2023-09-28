import scss from "./video.module.scss";
import { useRef, useState } from "react";
const Video = ({ src }) => {
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
		<div className={scss.video} onClick={playVideo}>
			<video
				src="/images/earth1.mp4"
				poster="/images/gameZone1.png"
				ref={ref}
				id="video"
			>
				Sorry, your browser doesn't support embedded videos, but don't worry,
				you can
				<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				and watch it with your favorite video player!
			</video>
			<img src="/images/Play.png" alt="Play" ref={refImg} />
		</div>
	);
};

export default Video;
