import scss from "./vacanciesCard.module.scss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import { useTranslation } from "next-i18next";
import Button from "../Button";
import axios from "axios";
import { baseUrl } from "@/shared/constants";
import { getContentLang } from "../../utils/changeLang";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const VacanciesCard = ({ setOpen, data, id }) => {
	const apiUrl = `${baseUrl}/vacancies`;
	// console.log("baseUrl>>>",baseUrl);
	const [vacanciesData, setVacanciesData] = useState([]);
	useEffect(()=>{
		axios.get(apiUrl).then((response) => {
			setVacanciesData(response.data);
		});
	},[])
	console.log("vacancies.data>>>",vacanciesData);
	
	const [select, setSelect] = useState(0);
	const { t } = useTranslation();
	const ref = useRef(null);
	const inter = useIntersectionObserver(ref, {});
	const open = (el) => {
		setOpen(true);
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
					{vacanciesData?.map((item, index) => (
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
										{/* <Image
											src={item.img}
											width={50}
											height={50}
											alt={item.img}
											id={item.id}
										/> */}
										<h3 id={item.id}>{getContentLang(item.titleUz, item.titleRu, item.titleEn)}</h3>
										<p id={item.id}>{getContentLang(item.textUz, item.textRu, item.textEn)}</p>
										<span
											id={item.id}
											onClick={(el) => {
												open(el);
											}}
										>
											{t("vacancies.vacanciesCard.send")}
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
