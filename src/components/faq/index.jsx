import { useState, Fragment } from "react";
import s from "./faq.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    title: "Где находится парк",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit laudantium veniam delectus aliquam doloribus!",
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi tenetur quaerat mollitia asperiores minus.",
  },
  {
    title: "Где находится парк",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit laudantium veniam delectus aliquam doloribus!",
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi tenetur quaerat mollitia asperiores minus.",
  },
  {
    title: "Где находится парк",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit laudantium veniam delectus aliquam doloribus!",
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi tenetur quaerat mollitia asperiores minus.",
  },
  {
    title: "Где находится парк",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit laudantium veniam delectus aliquam doloribus!",
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi tenetur quaerat mollitia asperiores minus.",
  },
  {
    title: "Где находится парк",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit laudantium veniam delectus aliquam doloribus!",
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi tenetur quaerat mollitia asperiores minus.",
  },
];

const FAQ = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.container}>
          <h2>частые вопросы</h2>
          <div>
            <Accordion data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Accordion = ({ data }) => {
  return (
    <>
      <div className={s.accordion}>
        {data.map((item, idx) => (
          <Fragment key={idx}>
            <Acc data={item} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

const Acc = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${s.accordion__item} `}
        onClick={() => setActive((p) => !p)}
      >
        <div>
          <h4>{data.title}</h4>
          <span>
            <FiChevronDown />
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
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              }}
            >
              <p>{data.text}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};
