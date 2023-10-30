import scss from "./aboutUs.module.scss";
import { useTranslation } from "next-i18next";
import Scrambles from "../scrambles/scrambles";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<div className={`${scss.aboutUs} container`}>
			<h2>
				<Scrambles text={t("home.about.title")} speed={0.3} />
			</h2>
			<p>{t("home.about.text")}</p>
		</div>
	);
};

export default AboutUs;
