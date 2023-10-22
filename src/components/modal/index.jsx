import { AnimatePresence, motion } from "framer-motion";
import s from "./modal.module.scss";
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
const Modal = ({ open, setOpen, children, width }) => {
  return (
    <>
      <AnimatePresence>
        {open ? (
          <div className={s.wrapper}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: [1.1, 1],
                transition: {
                  ease: "easeOut",
                  duration: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                transition: {
                  ease: "easeIn",
                  duration: 0.2,
                },
              }}
              style={{ width: `${width}%` }}
            >
              {children}
              <span onClick={() => setOpen(false)}>
                <FaXmark />
              </span>
            </motion.div>
            {/* {children} */}
          </div>
        ) : null}
      </AnimatePresence>
      {open ? (
        <div className={s.modalBG} onClick={() => setOpen(false)}></div>
      ) : null}
    </>
  );
};

export default Modal;
