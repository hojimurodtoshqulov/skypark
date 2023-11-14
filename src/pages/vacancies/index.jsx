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
		title: t("Вакансии"),
		heading: t("Большие вакансии в крупнейший парке"),
		text: t("about.showcase.text"),
	};
	const vacansiesData = [
		{
			id: 1,
			img: "/images/advantages-laptop.png",
			title: t("home.advantages.title1"),
			text: t("home.advantages.text6"),
		},
		{
			id: 2,
			img: "/images/advantages-richag.png",
			title: t("home.advantages.title2"),
			text: t("home.advantages.text5"),
		},
		{
			id: 3,
			img: "/images/advantages-globus1.png",
			title: t("home.advantages.title3"),
			text: t("home.advantages.text3"),
		},
		{
			id: 4,
			img: "/images/advantages-sandclock.png",
			title: t("home.advantages.title4"),
			text: t("home.advantages.text6"),
		},
		{
			id: 5,
			img: "/images/advantages-globus2.png",
			title: t("home.advantages.title5"),
			text: t("home.advantages.text5"),
		},
		{
			id: 6,
			img: "/images/advantages-rocket.png",
			title: t("home.advantages.title6"),
			text: t("home.advantages.text6"),
		},
	];
	return (
		<>
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
					<div
						style={{
							padding: "0px 0 200px",
						}}
					>
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
