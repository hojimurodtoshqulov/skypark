import Button from "../Button";
import scss from "./showcase.module.scss";
import { useState, useEffect, useRef } from "react";
import Form from "../form";
import Modal from "../modal";
import Video from "../video/video";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
// export const getStaticProps = async ({ locale }) => ({
// 	props: {
// 		...(await serverSideTranslations(locale, ["common"])),
// 	},
// });
const Showcase = () => {
	const { t } = useTranslation();
	const [openForm, setOpenForm] = useState(false);
	const [openVideo, setOpenVideo] = useState(false);
	const [width, setWidth] = useState(0);
	const ref = useRef();
	const [selected, setSelected] = useState(0);
	const titleData = [
		{
			title: t("home.showcase.title1"),
		},
		{
			title: t("home.showcase.title2"),
		},
		{
			title: t("home.showcase.title3"),
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
	// const options = {
	// 	strings: words,
	// 	typeSpeed: 50,
	// 	backSpeed: 50,
	// 	loop: true,
	// 	cursorChar: "|",
	// };
	const ScrambleTexts = [
		"lorem ipsum",
		"dolor sit amet",
		"consectetur adipiscing elit",
	];
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
					<AnimatePresence exitBeforeEnter>
						<motion.h2
							key={selected}
							className={scss.for__font}
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.5,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.5,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
							// transition={{ duration: 0.8 }}
						>
							{titleData[selected].title}
						</motion.h2>
					</AnimatePresence>
					<p>{t("home.showcase.text")}</p>
					<div className={scss.showcase_elements_buttons}>
						<Button
							variant="secondary"
							br={10}
							onClick={() => {
								setOpenForm(true);
							}}
						>
							{t("home.showcase.btn1")}
						</Button>
						<Button
							variant="primary"
							br={10}
							onClick={() => {
								setOpenVideo(true);
							}}
						>
							{t("home.showcase.btn2")}
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
