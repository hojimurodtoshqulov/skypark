import scss from "./vacanciesCard.module.scss";
import Image from "next/image";
import { useState, useRef } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import { useTranslation } from "next-i18next";
import Button from "../Button";
import Modal from "../modal";
import Form from "../form";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const VacanciesCard = () => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const inter = useIntersectionObserver(ref, {});
	const data = [
		{
			img: "/images/advantages-laptop.png",
			title: t("home.advantages.title1"),
			text: t("home.advantages.text6"),
		},
		{
			img: "/images/advantages-richag.png",
			title: t("home.advantages.title2"),
			text: t("home.advantages.text5"),
		},
		{
			img: "/images/advantages-globus1.png",
			title: t("home.advantages.title3"),
			text: t("home.advantages.text3"),
		},
		{
			img: "/images/advantages-sandclock.png",
			title: t("home.advantages.title4"),
			text: t("home.advantages.text6"),
		},
		{
			img: "/images/advantages-globus2.png",
			title: t("home.advantages.title5"),
			text: t("home.advantages.text5"),
		},
		{
			img: "/images/advantages-rocket.png",
			title: t("home.advantages.title6"),
			text: t("home.advantages.text6"),
		},
	];
	return (
		<>
			<div
				className={`${scss.vacanciesCardBG} container`}
				ref={ref}
				id="contact"
			>
				<div
					className={`${inter?.isIntersecting && scss.vacanciesCardB} ${
						scss.vacanciesCard
					}`}
				>
					{data?.map((item, index) => (
						<>
							<div
								className={scss.vacanciesCard_card}
								key={index}
								onClick={() => {
									setOpen(true);
									console.log("click");
								}}
							>
								<Button variant={"primaryBIG"} br={20}>
									<div className={scss.vacanciesCard_cardItems}>
										<Image
											src={item.img}
											width={50}
											height={50}
											alt={item.img}
										/>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
										<span> {t("home.month.sell")} </span>
									</div>
								</Button>
							</div>
						</>
					))}
				</div>
			</div>
			<Modal open={open} setOpen={setOpen} width={50}>
				<Form closeModal={() => setOpen(false)} />
			</Modal>
		</>
	);
};
export default VacanciesCard;
