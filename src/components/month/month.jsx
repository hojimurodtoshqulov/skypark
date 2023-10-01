import Image from "next/image";
import Button from "../Button";
import scss from "./month.module.scss";

const Moon = () => {
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
	return (
		<div className={`${scss.month} container`}>
			<div className={scss.monthTitle}>
				<span>{"<"}</span>
				<h2>Октябрь</h2>
				<span>{">"}</span>
			</div>
			{dataEle?.map((item, index) => (
				<div className={scss.monthElements} key={index}>
					<div className={scss.monthElementsCol1}>
						<div className={scss.monthElementsCol1Ele}>
							<h2>
								{item.day}
								<p>{item.week}</p>
							</h2>
							<Image width={200} height={200} src={item.img} alt={item.img} />
						</div>
						<span></span>
					</div>
					<div className={scss.monthElementsCol2}>
						<div className={scss.monthElementsCol2Ele}>
							<h4>{item.title} </h4>
							<p>
								<span>{item.text}</span>
							</p>
							<p>{item.time} </p>
						</div>
						<span className={scss.monthElementsCol2Buy}>Kupit bilet</span>
					</div>
				</div>
			))}
			<Button variant="secondary" br={10}>
				Следующий месяц
			</Button>
		</div>
	);
};

export default Moon;
