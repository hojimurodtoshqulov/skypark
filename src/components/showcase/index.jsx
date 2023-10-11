import Button from "../Button";
import scss from "./showcase.module.scss";
import { useState, useEffect, useRef } from "react";
import Form from "../form";
import Modal from "../modal";
import Typed from "typed.js";
import Video from "../video/video";
// import Scrambles from "../scrambles/scrambles.jsx";
// import localFont from "@next/font/local";

// const myFont = localFont({
//   src: "./fonts/Druk Wide Medium Regular/Druk Wide Medium Regular.ttf",
// });

const Showcase = () => {
	const [openForm, setOpenForm] = useState(false);
	const [openVideo, setOpenVideo] = useState(false);
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
						src="/images/skypark1.mp4"
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
      <Modal open={openVideo} setOpen={setOpenVideo} width={70}>
        <Video height={70} />
      </Modal>
    </>
  );
};

export default Showcase;
