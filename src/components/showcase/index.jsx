import Button from "../Button";
import scss from "./showcase.module.scss";
import { useState, useEffect, useRef } from "react";
import Form from "../form";
import Modal from "../modal";
import Video from "../video/video";
import { useTranslation } from "next-i18next";

const Showcase = () => {
	const [openForm, setOpenForm] = useState(false);
	const [openVideo, setOpenVideo] = useState(false);
	const [width, setWidth] = useState(0);
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
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		setWidth(window.innerWidth);
	});
	console.log("width>>>", width);
	// const options = {
	// 	strings: words,
	// 	typeSpeed: 50,
	// 	backSpeed: 50,
	// 	loop: true,
	// 	cursorChar: "|",
	// };
	return (
		<>
			<div className={scss.showcase} ref={ref}>
				<div className={scss.showcase_bgVideo}>
					<video
						src={
							width < 565 ? "/images/skypark1(1).mp4" : "/images/skypark1.mp4"
						}
						autoPlay
						muted
						loop
					>
						<a href="https://archive.org/details/BigBuckBunny_124">
							download it
						</a>
					</video>
					<div></div>
				</div>
				<div className={`${scss.showcase_elements} container`}>
					<h2 className={scss.for__font}>{titleData[selected].title}</h2>
					{/* <Scrambles /> */}
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
						<Button
							variant="secondary"
							br={10}
							onClick={() => {
								setOpenForm(true);
							}}
						>
							Оставить заявку
						</Button>
						<Button
							variant="primary"
							br={10}
							onClick={() => {
								setOpenVideo(true);
							}}
						>
							Смотреть видео
						</Button>
					</div>
				</div>
			</div>
			<Modal open={openForm} setOpen={setOpenForm} width={40}>
				<Form closeModal={() => setOpenForm(false)} />
			</Modal>
			<Modal open={openVideo} setOpen={setOpenVideo} width={90}>
				<Video
					height={100}
					src="/images/earth.mp4"
					imgSrc="/images/gameZone1.png"
				/>
			</Modal>
		</>
	);
};

export default Showcase;
