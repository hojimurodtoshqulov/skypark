import Image from "next/image";
import Button from "../Button";
import scss from "./month.module.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
// import Scrambles from "../scrambles/scrambles";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Moon = ({ handleClick }) => {
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);
	const dataEle = [
		{
			day: "02",
			week: t("home.month.month1.week1"),
			img: "/images/gameZone3.png",
			title: t("home.month.month1.title1"),
			text: t("home.month.month1.text1"),
			time: "16:00",
		},
		{
			day: "08",
			week: t("home.month.month1.week2"),
			img: "/images/gameZone2.png",
			title: t("home.month.month1.title2"),
			text: t("home.month.month1.text2"),
			time: "16:00",
		},
		{
			day: "14",
			week: t("home.month.month1.week3"),
			img: "/images/gameZone1.png",
			title: t("home.month.month1.title3"),
			text: t("home.month.month1.text3"),
			time: "16:00",
		},
		{
			day: "20",
			week: t("home.month.month1.week4"),
			img: "/images/gameZone2.png",
			title: t("home.month.month1.title4"),
			text: t("home.month.month1.text4"),
			time: "16:00",
		},
		{
			day: "26",
			week: t("home.month.month1.week5"),
			img: "/images/gameZone3.png",
			title: t("home.month.month1.title5"),
			text: t("home.month.month1.text5"),
			time: "16:00",
		},
	];
	const dataEle2 = [
		{
			day: "01",
			week: t("home.month.month2.week1"),
			img: "/images/gameZone3.png",
			title: t("home.month.month2.title1"),
			text: t("home.month.month2.text1"),
			time: "16:00",
		},
		{
			day: "09",
			week: t("home.month.month2.week2"),
			img: "/images/gameZone2.png",
			title: t("home.month.month2.title2"),
			text: t("home.month.month2.text2"),
			time: "16:00",
		},
		{
			day: "14",
			week: t("home.month.month2.week3"),
			img: "/images/gameZone1.png",
			title: t("home.month.month2.title3"),
			text: t("home.month.month2.text3"),
			time: "16:00",
		},
		{
			day: "22",
			week: t("home.month.month2.week4"),
			img: "/images/gameZone2.png",
			title: t("home.month.month2.title4"),
			text: t("home.month.month2.text4"),
			time: "16:00",
		}
	];
	const arr = [dataEle, dataEle2];
	const month = [t("home.month.month1.month"), t("home.month.month2.month")];
	const tLength = arr.length;
	return (
		<div className={`${scss.month} container`}>
			<div className={scss.monthTitle}>
				<span
					className={scss.monthTitle_arrow}
					onClick={() => {
						select === 0
							? setSelect(tLength - 1)
							: setSelect((prev) => prev - 1);
					}}
				>
					<FaChevronLeft />
				</span>
				<motion.h2
					key={select}
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
					transition={{ duration: 0.4 }}
				>
					{month[select]}
					{/* <Scrambles text={} speed={0.4} /> */}
				</motion.h2>
				<span
					className={scss.monthTitle_arrow}
					onClick={() => {
						select === tLength - 1
							? setSelect(0)
							: setSelect((prev) => prev + 1);
					}}
				>
					<FaChevronRight />
				</span>
			</div>
			{arr[select]?.map((item, index) => (
				<Link
					className={scss.detail_link}
					key={index}
					href={"/events"}
					onClick={() => {
						if (typeof handleClick === "function") {
							handleClick(item);
						}
					}}
				>
					<div className={scss.monthElements}>
						<div className={scss.monthElementsCol1}>
							<motion.div
								className={scss.monthElementsCol1Ele}
								key={select}
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -100 }}
								transition={{ duration: 0.4 }}
							>
								<h2>
									{item.day}
									<p>{item.week}</p>
								</h2>
								<Image width={200} height={200} src={item.img} alt={item.img} />
							</motion.div>
							<span></span>
						</div>
						<div className={scss.monthElementsCol2}>
							<motion.div
								className={scss.monthElementsCol2Ele}
								key={select}
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -100 }}
								transition={{ duration: 0.4 }}
							>
								<h4>{item.title} </h4>
								<p>
									<span>{item.text}</span>
								</p>
								<p>{item.time} </p>
							</motion.div>
							<span className={scss.monthElementsCol2Buy}>
								{t("home.month.sell")}
							</span>
						</div>
					</div>
				</Link>
			))}
			<Button
				onClick={() => {
					select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1);
				}}
				variant="secondary"
				br={10}
			>
				{t("home.month.nextMonth")}
			</Button>
		</div>
	);
};

export default Moon;
