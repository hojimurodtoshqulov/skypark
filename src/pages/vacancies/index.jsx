import scss from "./vacancies.module.scss";
import ZoneShowcase from "@/components/zoneShowcase";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import AnimationSection from "@/components/animationSection/animationSection";
import VacanciesCard from "@/components/vacanciesCard/vacanciesCard";
import Modal from "@/components/modal";
import VacansiesForm from "@/components/vacanciesForm";
import { useState } from "react";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const Vacancies = () => {
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(0);
	const { t } = useTranslation();
	const showcaseData = {
		title: t("vacancies.vacancies"),
		heading: t("vacancies.title"),
		text: t("vacancies.text1"),
	};
	const vacansiesData = [
		{
			id: 1,
			img: "/images/advantages-laptop.png",
			title: t("vacancies.vacanciesCard.card1.title"),
			text: t("vacancies.vacanciesCard.card1.text"),
		},
		{
			id: 2,
			img: "/images/advantages-richag.png",
			title: t("vacancies.vacanciesCard.card2.title"),
			text: t("vacancies.vacanciesCard.card2.text"),
		},
		{
			id: 3,
			img: "/images/advantages-globus1.png",
			title: t("vacancies.vacanciesCard.card3.title"),
			text: t("vacancies.vacanciesCard.card3.text"),
		},
		{
			id: 4,
			img: "/images/advantages-sandclock.png",
			title: t("vacancies.vacanciesCard.card4.title"),
			text: t("vacancies.vacanciesCard.card4.text"),
		},
	];
	return (
		<>
			<div className={`${scss.vacancies}`}>
				<div
					style={{
						padding: "0 0 100px",
					}}
					className={scss.vacanciesShowcase}
				>
					<ZoneShowcase data={showcaseData} />
				</div>
				<AnimationSection>
					<div className={scss.vacanciesAnimationSection}>
						<p>{t("vacancies.text2")}</p>
						<VacanciesCard setOpen={setOpen} data={vacansiesData} id={setId} />
					</div>
				</AnimationSection>
				<Modal open={open} setOpen={setOpen} width={50}>
					<VacansiesForm
						closeModal={() => setOpen(false)}
						data={vacansiesData}
						id={id}
					/>
				</Modal>
			</div>
		</>
	);
};

export default Vacancies;
