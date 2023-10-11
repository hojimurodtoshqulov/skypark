import Image from "next/image";
import Button from "../Button";
import scss from "./month.module.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Moon = () => {
	const [select, setSelect] = useState(0);
	const dataEle = [
		{
			day: "03",
			week: "Воскресенье",
			img: "/images/gameZone3.png",
			title: "Искусство Иллюзий",
			text: "Многообразие зон потребности гостей всех возрастов",
			time: "16:00",
		},
		{
			day: "09",
			week: "Суббота",
			img: "/images/gameZone2.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "15",
			week: "Пятница",
			img: "/images/gameZone1.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "19",
			week: "Вторник",
			img: "/images/gameZone2.png",
			title: "Фестиваль Фокусов",
			text: "Потребности гостей всех возрастов",
			time: "16:00",
		},
		{
			day: "28",
			week: "Четверг",
			img: "/images/gameZone3.png",
			title: "Музыкальные Подвиги",
			text: "Многообразие зон потребности гостей",
			time: "16:00",
		},
	];
	const dataEle2 = [
		{
			day: "28",
			week: "Суббота",
			img: "/images/gameZone3.png",
			title: "Музыкальные Подвиги",
			text: "Многообразие зон потребности гостей",
			time: "16:00",
		},
		{
			day: "03",
			week: "Суббота",
			img: "/images/gameZone3.png",
			title: "Искусство Иллюзий",
			text: "Многообразие зон потребности гостей всех возрастов",
			time: "16:00",
		},
		{
			day: "15",
			week: "Суббота",
			img: "/images/gameZone1.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "09",
			week: "Суббота",
			img: "/images/gameZone2.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "19",
			week: "Суббота",
			img: "/images/gameZone2.png",
			title: "Фестиваль Фокусов",
			text: "Потребности гостей всех возрастов",
			time: "16:00",
		},
	];
	const dataEle3 = [
		{
			day: "19",
			week: "Пятница",
			img: "/images/gameZone2.png",
			title: "Фестиваль Фокусов",
			text: "Потребности гостей всех возрастов",
			time: "16:00",
		},

		{
			day: "15",
			week: "Пятница",
			img: "/images/gameZone1.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "28",
			week: "Пятница",
			img: "/images/gameZone3.png",
			title: "Музыкальные Подвиги",
			text: "Многообразие зон потребности гостей",
			time: "16:00",
		},
		{
			day: "09",
			week: "Пятница",
			img: "/images/gameZone2.png",
			title: "Культурные Ивенты",
			text: "Для всех возрастов",
			time: "16:00",
		},
		{
			day: "03",
			week: "Пятница",
			img: "/images/gameZone3.png",
			title: "Искусство Иллюзий",
			text: "Многообразие зон потребности гостей всех возрастов",
			time: "16:00",
		},
	];
	const arr = [dataEle, dataEle2, dataEle3];
	const month = ["Октябрь", "Ноябрь", "Декабрь"];
	const tLength = arr.length;
	return (
		<div className={`${scss.month} container`}>
			<div className={scss.monthTitle}>
				<span
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
				</motion.h2>
				<span
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
				<div className={scss.monthElements} key={index}>
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
						<span className={scss.monthElementsCol2Buy}>Подробнее</span>
					</div>
				</div>
			))}
			<Button
				onClick={() => {
					select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1);
				}}
				variant="secondary"
				br={10}
			>
				Следующий месяц
			</Button>
		</div>
	);
};

export default Moon;
