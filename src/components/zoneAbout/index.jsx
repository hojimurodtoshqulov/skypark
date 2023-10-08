import { Fragment } from "react";
import s from "./ZoneAbout.module.scss";
import Image from "next/image";

const ZoneAbout = ({ about }) => {
  return (
    <>
      <div className={s.wrapper}>
        {about &&
          about.map((a, i) => (
            <div className={s.card} key={i}>
              <div className="container">
                <h2>{a.h2}</h2>
              </div>
              <div className={s.flex}>
                <div className={s.img}>
                  <Image
                    width={666}
                    height={636}
                    // layout="responsive"
                    src={a.image}
                  />
                </div>
                <div className={s.text}>
                  <h3>{a.h4}</h3>
                  <p>{a.p}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ZoneAbout;
