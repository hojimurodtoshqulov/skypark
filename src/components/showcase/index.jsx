import Button from "../Button";
import scss from "./showcase.module.scss";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const Showcase = () => {
	const ref = useRef();
	const [selected, setSelected] = useState(0);
	const titleData = [
		{
			title: "Крупнейшие аттракционы в городе",
		},
		{
			title: "Sky Park для взрослых и детей (3+)",
		},
		{
			title: "Ломаем стереотипы о парках развлечении",
		},
	];
	const tLength = titleData.length;
	useEffect(() => {
		const interval = setInterval(() => {
			selected === tLength - 1
				? setSelected(0)
				: setSelected((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
			console.log("selected >>> ", selected);
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	// const options = {
	// 	strings: words,
	// 	typeSpeed: 50,
	// 	backSpeed: 50,
	// 	loop: true,
	// 	cursorChar: "|",
	// };
	return (
		<div className={scss.showcase} ref={ref}>
			<div className={scss.showcase_bgVideo}>
				<video
					// controls
					src="/images/Sky Park.mp4"
					// poster="/images/Sky Park 1.png"
					autoPlay
					muted
					loop
				>
					<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				</video>
				<div></div>
			</div>
			<div className={`${scss.showcase_elements} container`}>
				<h1>{titleData[selected].title}</h1>
				<p>
					Преврати свой день в незабываемое путешествие посетив наши
					аттракционы!
				</p>
				{/* <span
					style={{ whiteSpace: "pre" }}
					ref={(el) => {
						this.el = el;
					}}
				/> */}
				<div className={scss.showcase_elements_buttons}>
					<Button variant="secondary" br={10}>
						Оставить заявку
					</Button>
					<Button variant="primary" br={10}>
						Смотреть видео
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
