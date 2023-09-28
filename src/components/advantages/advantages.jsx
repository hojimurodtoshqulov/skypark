import scss from "./advantages.module.scss";

const Advantages = () => {
	const data = [
		{
			img: "/images/advantages-laptop.png",
			title: "Образовательная ценность",
			text: "Парк предоставляет уникальную возможность сочетать обучение и развлечения, позволяя гостям изучать научные и технологические принципы в интерактивной и вовлекающей формах",
		},
		{
			img: "/images/advantages-richag.png",
			title: "Технологическое новаторство",
			text: "Применение технологических инноваций, таких как интерактивные развлечения и виртуальная реальность, делают каждое посещение увлекательным и незабываемым",
		},
		{
			img: "/images/advantages-globus1.png",
			title: "Безопасность и комфорт",
			text: "Парк обеспечивает высший стандарт безопасности для всех своих гостей, создавая спокойную и комфортную среду",
		},
		{
			img: "/images/advantages-sandclock.png",
			title: "Постоянное развитие",
			text: "Парк регулярно следит за актуальными тенденциями и исследованиями в области науки и технологий, чтобы предложить гостям самые увлекательные активности",
		},
		{
			img: "/images/advantages-globus2.png",
			title: "Профессиональный персонал",
			text: "Опытные и обученные сотрудники готовы помочь, рассказать, провести экскурсию или обучающий класс, обеспечивая качественное обслуживание",
		},
		{
			img: "/images/advantages-rocket.png",
			title: "Разнообразие аттракционов",
			text: "Многообразие зон и аттракционов удовлетворит интересы и потребности гостей всех возрастов",
		},
	];
	return (
		<div className={`${scss.advantages} container`}>
			<div className={scss.advantages_card}>
				<img src="/images/advantages-laptop.png" alt="ss" />
				<h3>Образовательная ценность</h3>
				<p>
					Парк предоставляет уникальную возможность сочетать обучение и
					развлечения, позволяя гостям изучать научные и технологические
					принципы в интерактивной и вовлекающей формах
				</p>
			</div>
			;
			{data?.map((item, index) => {
				<div className={scss.advantages_card} key={index}>
					<img src={item.img} alt={item.img} />
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</div>;
			})}
		</div>
	);
};

export default Advantages;
