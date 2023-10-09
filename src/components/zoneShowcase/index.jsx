import { AnimatePresence, motion } from "framer-motion";
import s from "./zoneShowcase.module.scss";

const ZoneShowcase = ({ data }) => {
  return (
    <AnimatePresence>
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.mini__container}>
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 6.5 }}
            >
              {data?.title}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 6.65 }}
            >
              {data?.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 6.8 }}
            >
              {data?.text}
            </motion.p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ZoneShowcase;
