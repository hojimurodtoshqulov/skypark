import { useState, Fragment } from "react";
import s from "./faq.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/images/pattern1.png";

const data = [
	{
		title: "Где находится парк",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title: "Предусмотрена ли парковка для автомобилей?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title: "Какие меры безопасности будут соблюдаться в парке?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title: "В парке можно будет перекусить?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title:
			"Как узнать о дате открытия, будущих специальных акциях и мероприятиях?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title:
			"Можно ли будет провести день рождения или другое праздничное событие?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title: "Есть ли детские зоны или аттракционы для малышей?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
	{
		title: "В парке предусмотрена комната для кормления малышей?",
		text: "Мы строго следуем всем мировым стандартам безопасности, аттракционы имеют международные сертификаты качества",
	},
];

const FAQ = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.container}>
					<div>
						<h2>частые вопросы</h2>
					</div>
					<div>
						<Accordion data={data} />
					</div>
				</div>
			</div>
			<Image src={img1} alt={img1} />
		</div>
	);
};

export default FAQ;

const Accordion = ({ data }) => {
	return (
		<>
			<div className={s.accordion}>
				{data.map((item, idx) => (
					<Fragment key={idx}>
						<Acc data={item} />
					</Fragment>
				))}
			</div>
		</>
	);
};

const Acc = ({ data }) => {
	const [active, setActive] = useState(false);

	return (
		<>
			<div
				className={`${s.accordion__item} `}
				onClick={() => setActive((p) => !p)}
			>
				<div>
					<h4 className={active ? s.colorPrimary : s.colorTerti}>
						{data.title}
					</h4>
					<span className={active ? s.toTop : s.toDown}>
						<FiChevronUp />
					</span>
				</div>
				<AnimatePresence>
					{active ? (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: 1,
								height: "max-content",
								transition: {
									duration: 0.5,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
							exit={{
								opacity: 0,
								height: 0,
								transition: {
									duration: 0.5,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
						>
							<p>{data.text}</p>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</>
	);
};
