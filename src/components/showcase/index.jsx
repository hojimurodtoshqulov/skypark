import Button from "../Button";
import scss from "./showcase.module.scss";
import { useState, useEffect, useRef } from "react";
import Form from "../form";
import Modal from "../modal";
import Typed from "typed.js";
import Video from "../video/video";
// import localFont from "@next/font/local";

// const myFont = localFont({
//   src: "./fonts/Druk Wide Medium Regular/Druk Wide Medium Regular.ttf",
// });
const Showcase = () => {
  const [open, setOpen] = useState(false);
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
            // controls
            src="/images/Sky Park.mp4"
            // poster="/images/Sky Park 1.png"
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
          <h1 className={scss.for__font}>{titleData[selected].title}</h1>
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
                setOpen(true);
              }}
            >
              Оставить заявку
            </Button>
            <Button
              variant="primary"
              br={10}
              onClick={() => {
                setOpen(true);
              }}
            >
              Смотреть видео
            </Button>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} s>
        <Form closeModal={() => setOpen(false)} />
      </Modal>
      <Modal open={open} setOpen={setOpen} s>
        <Video />
      </Modal>
    </>
  );
};

export default Showcase;
