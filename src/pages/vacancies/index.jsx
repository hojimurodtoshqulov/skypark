import scss from "./vacancies.module.scss";
import ZoneShowcase from "@/components/zoneShowcase";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import AnimationSection from "@/components/animationSection/animationSection";
import VacanciesCard from "@/components/vacanciesCard/vacanciesCard";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const Vacancies = () => {
	const { t } = useTranslation();
	const showcaseData = {
		title: t("Вакансии"),
		heading: t("Большие вакансии в крупнейший парке"),
		text: t("about.showcase.text"),
	};
	const vacanData = {
		title: t("about.showcase.titleMain"),
		heading: t("about.showcase.title"),
		text: t("about.showcase.text"),
	};
	return (
		<div className={`${scss.vacancies}`}>
			<div
				style={{
					padding: "0px 0 100px",
				}}
				className={scss.vacanciesShowcase}
			>
				<ZoneShowcase data={showcaseData} />
			</div>
			<AnimationSection>
				{/* {vacanData?.map((item, index) => (
					<>
						<div></div>
					</>
				))} */}
				<div
					style={{
						padding: "0px 0 200px",
					}}
				>
					<VacanciesCard />
				</div>
			</AnimationSection>
		</div>
	);
};

export default Vacancies;
