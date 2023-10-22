import Link from "next/link";
import s from "./sidebar.module.scss";
import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import CardZone from "@/components/cardZone/cardZone";
import { useTranslation } from "next-i18next";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!ref.current) return;
  //     const currentScrollPos = window.pageYOffset;
  //     ref.current.style.translate =
  //       scrollPosition < currentScrollPos && currentScrollPos > 10
  //         ? setIsOpen(false)
  //         : "0";
  //     setScrollPosition(currentScrollPos);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [scrollPosition]);
  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div>
            <div className={s.wrapper} ref={ref}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Acc
                  setIsOpen={setIsOpen}
                  active={active}
                  setActive={setActive}
                />
              </motion.div>
              <motion.div
                onClick={() => setIsOpen(false)}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  className={`${s.link_head} ${active ? s.blur : ""}`}
                  href="/"
                >
                  <h2>Мероприятия</h2>
                  <span>
                    <BiRightArrowAlt />
                  </span>
                </Link>
              </motion.div>
              <motion.div
                onClick={() => setIsOpen(false)}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  className={`${s.link_head} ${active ? s.blur : ""}`}
                  href="/"
                >
                  <h2>О парке</h2>
                  <span>
                    <BiRightArrowAlt />
                  </span>
                </Link>
              </motion.div>
              <motion.div
                onClick={() => setIsOpen(false)}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  className={`${s.link_head} ${active ? s.blur : ""}`}
                  href="/"
                  style={{ borderBottom: "2px solid #665ec7" }}
                >
                  <h2>Контакты</h2>
                  <span>
                    <BiRightArrowAlt />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

const Acc = ({ setIsOpen, active, setActive }) => {
  return (
    <>
      <div className={`${s.accordion__item} `}>
        <div
          onClick={() => setActive((p) => !p)}
          style={{ color: !active ? "#fff" : "#bbe4ae" }}
        >
          <a className={s.link_head}>
            <h2 className={active ? s.colorWhite : s.colorPrimary}>
              Аттракционы
            </h2>
            <span className={!active ? s.toTop : s.toDown}>
              <BiRightArrowAlt />
            </span>
          </a>
        </div>
        <AnimatePresence>
          {active ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                // height: "max-content",
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
              exit={{
                opacity: 0,
                // height: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
            >
              <DropDown />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

const attractionsData = [
  {
    id: 1,
    img: "/images/gameZone1.png",
    title: "Зона 1",
    text: "Детский научный комплекс (ДНК)",
  },
  { id: 2, img: "/images/gameZone2.png", title: "Зона 2", text: "VR - зона" },
  {
    id: 3,
    img: "/images/gameZone3.png",
    title: "Зона 3",
    text: "Activity zone",
  },
];

const DropDown = () => {
  return (
    <>
      <div className={s.cards__container}>
        {attractionsData.map((item, idx) => (
          <Fragment key={idx}>
            <CardZone
              id={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              withBorder
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};
