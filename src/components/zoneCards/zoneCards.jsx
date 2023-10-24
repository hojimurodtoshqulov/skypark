import CardZone from "../cardZone/cardZone";
import scss from "./zoneCards.module.scss";
import { useTranslation } from "next-i18next";

const ZoneCards = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className={`${scss.ZoneCards} container`}>
      <h2 className="container">{t("atraction1.othersAtractions.title")}</h2>
      <div className={`${scss.zoneCards} `}>
        {data?.map((item, index) => (
          <>
            <CardZone
              id={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              key={index}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ZoneCards;
