import scss from "./mission.module.scss";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Mission = () => {
	const { t } = useTranslation();
	return (
		<div className={`${scss.mission} container`}>
			<h2>
				<span> {t("about.mission.titleSpan")} </span>
				{t("about.mission.title")}
			</h2>
			<div className={scss.texts}>
				<div className={scss.texts_corner}>
					<span></span>
					<div></div>
				</div>
				<p>{t("about.mission.text")}</p>
			</div>
		</div>
	);
};

export default Mission;
