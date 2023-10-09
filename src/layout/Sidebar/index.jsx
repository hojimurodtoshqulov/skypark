import Link from "next/link";
import s from "./sidebar.module.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const currentScrollPos = window.pageYOffset;
      ref.current.style.translate =
        scrollPosition < currentScrollPos && currentScrollPos > 10
          ? setIsOpen(false)
          : "0";
      setScrollPosition(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);
  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div>
            <div
              style={{ backgroundColor: "rgba(91, 21, 166, 0.95)" }}
              className={s.wrapper}
              ref={ref}
            >
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
                <Acc setIsOpen={setIsOpen} />
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
                <Link href="/">Мероприятия</Link>
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
                <Link href="/">О парке</Link>
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
                <Link href="/">Контакты</Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

const Acc = ({ setIsOpen }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={`${s.accordion__item} `}>
        <div
          onClick={() => setActive((p) => !p)}
          style={{ color: !active ? "#fff" : "#bbe4ae" }}
        >
          <h4 className={active ? s.colorWhite : s.colorPrimary}>
            <a>Аттракционы</a>
          </h4>
          <span className={!active ? s.toTop : s.toDown}>
            <FiChevronUp />
          </span>
        </div>
        <AnimatePresence>
          {active ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "max-content",
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
            >
              <div className={s.acc__links}>
                <motion.div
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  exit={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: 0.1 }}
                >
                  <Link href={"/zone/1"}>Zone 1</Link>
                </motion.div>

                <motion.div
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  exit={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: 0.2 }}
                >
                  <Link href={"/zone/1"}>Zone 2</Link>
                </motion.div>
                <motion.div
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  exit={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: 0.3 }}
                >
                  <Link href={"/zone/1"}>Zone 3</Link>
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};
