import Image from "next/image";
import s from "./eventShowcase.module.scss";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const EventShowcase = () => {
  return (
    <div className={s.warapper}>
      <div className={`container ${s.showcase}`}>
        <h2>Искусство Иллюзий</h2>
        <p>Многообразие зон потребности гостей всех возрастов</p>
      </div>
      <div className={s.image}>
        <Image
          src="/images/gameZone1.png"
          width={1440}
          height={520}
          layout="responsive"
        />
      </div>
      <div className={s.showcase}>
        <span></span>
        <p>
          Специально для малышей от 2 до 5 лет мы продумали активности, где они
          могут насладиться рыбалкой, поиграть с кинетическим песком или в
          бассейне с шариками, покататься на аттракционах, пройти 15-метровый
          лабиринт и ещё много интересного и познавательного
        </p>
      </div>
    </div>
  );
};

export default EventShowcase;
