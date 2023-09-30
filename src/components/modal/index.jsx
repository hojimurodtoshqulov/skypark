import { AnimatePresence, motion } from "framer-motion";
import s from "./modal.module.scss";

const Modal = ({ open, setOpen, children }) => {
  return (
    <>
      <AnimatePresence>
        {open ? (
          <div className={s.wrapper} onClick={() => setOpen(false)}>
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
            >
              {children}
            </motion.div>
            {/* {children} */}
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Modal;
