import scss from "./vacanciesCard.module.scss";
import Image from "next/image";
import { useState, useRef } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import { useTranslation } from "next-i18next";
import Button from "../Button";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const VacanciesCard = ({ setOpen, data, id }) => {
	const [select, setSelect] = useState(0);
	const { t } = useTranslation();
	const ref = useRef(null);
	const inter = useIntersectionObserver(ref, {});
	const open = (el) => {
		setOpen(true);
		console.log("target id>>>", el.target.id);
		id(el.target.id);
	};
	// const openData = (el) => {
	// 	setSelect(el.target.id);
	// 	setOpenModal(true);
	// };
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
							<div className={scss.vacanciesCard_card} key={index} id={item.id}>
								<Button variant={"primaryBIG"} br={20} id={item.id}>
									<div
										className={scss.vacanciesCard_cardItems}
										id={item.id}
										onClick={(el) => {
											open(el);
										}}
									>
										<Image
											src={item.img}
											width={50}
											height={50}
											alt={item.img}
											id={item.id}
										/>
										<h3 id={item.id}>{item.title}</h3>
										<p id={item.id}>{item.text}</p>
										<span
											id={item.id}
											onClick={(el) => {
												open(el);
											}}
										>
											{t("home.month.sell")}
										</span>
									</div>
								</Button>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};
export default VacanciesCard;
