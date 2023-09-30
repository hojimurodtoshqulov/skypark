import Image from "next/image";
import s from "./Principle.module.scss";
import Img from "../../../public/images/gameZone1.png";
import Img2 from "../../../public/images/gameZone2.png";
import Img3 from "../../../public/images/gameZone3.png";
import { useRef } from "react";
import useIntersectionObserver from "../InterSectionObserver";

const Principle = () => {
	// const scrollRef = useRef(null);

	return (
		<div className={`${s.wrapper} container`}>
			<Content />
			<div className={s.scroller}></div>
			{/* <div ref={scrollRef} className={s.scroll}></div> */}
		</div>
	);
};

export default Principle;

const Content = () => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const refImg1 = useRef(null);
	const refImg2 = useRef(null);
	const refImg3 = useRef(null);
	const inter1 = useIntersectionObserver(ref1, {});
	const inter2 = useIntersectionObserver(ref2, {});
	const inter3 = useIntersectionObserver(ref3, {});
	const data = [
		{
			img: Img,
			title: "Функционирование",
			text: "Наш парк работает каждый день, предоставляя качественные услуги для всех посетителей. Все аттракционы, кафе и другие зоны развлечений поддерживаются в идеальном состоянии для вашего комфорта.",
			inter: inter1,
			ref: ref1,
			refImg: refImg1,
		},
		{
			img: Img2,
			title: "Безопасность",
			text: "Наш основной приоритет — безопасность гостей. Мы регулярно проводим техническое обслуживание аттракционов и контролируем персонал для обеспечения безопасности.",
			inter: inter2,
			ref: ref2,
			refImg: refImg2,
		},
		{
			img: Img3,
			title: "Разнобразие",
			text: "Мы стремимся и развлекать, и обучать. Наши VR-аттракционы, Activity-зона и Детский научный комплекс разработаны таким образом, чтобы стимулировать интерес к науке, технологиям и искусству.",
			inter: inter3,
			ref: ref3,
			refImg: refImg3,
		},
	];
	return (
		<>
			{data?.map((item, index) => (
				<div className={s.content} key={index}>
					<div className={s.content__image} ref={item.refImg}>
						<Image
							layout="responsive"
							width={500}
							height={280}
							src={item.img}
							alt={item.img}
							className={`${item.inter?.isIntersecting && s.activeImg}`}
						/>
					</div>
					<div className={s.content__text}>
						<h4 className={`${item.inter?.isIntersecting && s.lightTitle}`}>
							{item.title}
						</h4>
						<p className={`${item.inter?.isIntersecting && s.light}`}>
							{item.text}
						</p>
						<div className={s.bottomLine} ref={item.ref}></div>
					</div>
				</div>
			))}
		</>
	);
};
