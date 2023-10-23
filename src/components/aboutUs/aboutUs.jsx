import scss from "./aboutUs.module.scss";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<div className={`${scss.aboutUs} container`}>
			<h2>{t("home.about.title")}</h2>
			<p>{t("home.about.text")}</p>
		</div>
	);
};

export default AboutUs;
