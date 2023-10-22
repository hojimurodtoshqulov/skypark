import { Fragment } from "react";
import s from "./ZoneCount.module.scss";
import Button from "../Button";
import { useTranslation } from "next-i18next";
const ZoneCount = ({ rules }) => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2>{rules?.heading}</h2>
        <div className={s.cards}>
          {rules?.details.map((d, i) => (
            <Fragment key={i}>
              <Button variant="primaryBIG" br={20}>
                <div className={s.btn__content}>
                  <h2>
                    {d?.number}
                    {<sup>{d?.sup}</sup>}
                  </h2>
                  <p>{d?.info}</p>
                </div>
              </Button>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZoneCount;
