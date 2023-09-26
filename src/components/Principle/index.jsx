import Image from "next/image";
import s from "./Principle.module.scss";
import Img from "@/image 114.png";
import { useRef } from "react";

const arr = [1, 2, 3];

const Principle = () => {
  const scrollRef = useRef(null);
  return (
    <div className={s.wrapper}>
      {arr.map((a) => (
        <Content key={a} />
      ))}
      <div ref={scrollRef} className={s.scroll}></div>
    </div>
  );
};

export default Principle;

const Content = () => {
  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className={s.content}>
        <div className={s.content__image}>
          <Image
            layout="responsive"
            width={500}
            height={280}
            src={Img}
            alt={"image"}
          />
        </div>
        <div className={s.content__text}>
          <h4>Функционирование</h4>
          <p>
            Наш парк работает каждый день, предоставляя качественные услуги для
            всех посетителей. Все аттракционы, кафе и другие зоны развлечений
            поддерживаются в идеальном состоянии для вашего комфорта.
          </p>
        </div>
      </div>
    </>
  );
};
