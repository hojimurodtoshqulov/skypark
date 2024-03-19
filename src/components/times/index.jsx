import Button from "../Button";
import s from "./times.module.scss";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Times = () => {
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <div className="container">
        <Button variant="primaryBIG" br={20}>
          <h3>{t("contact.timeOpen")}</h3>
          <h2>10 : 00</h2>
        </Button>
        <span></span>
        <Button variant="primaryBIG" br={20}>
          <h3>{t("contact.timeClose")}</h3>
          <h2>22 : 00</h2>
        </Button>
      </div>
    </div>
  );
};

export default Times;
