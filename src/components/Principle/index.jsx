import Image from "next/image";
import s from "./Principle.module.scss";
import Img from "../../../public/images/gameZone1.png";
import Img2 from "../../../public/images/gameZone2.png";
import Img3 from "../../../public/images/gameZone3.png";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../Button";
import { useTranslation } from "next-i18next";

const Principle = () => {
	// const scrollRef = useRef(null);

	return (
		<>
			<div className={`${s.wrapper} container`}>
				<Content />

				{/* <div ref={scrollRef} className={s.scroll}></div> */}
			</div>
			<Carousel />
		</>
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
	const ref = useRef(null);
	const inter = useIntersectionObserver(ref, {});
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		window.addEventListener("scroll", function () {
			setOffset(window.pageYOffset);
		});
	});

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
			<div className={s.content} ref={ref}>
				<div className={s.content__images}>
					{data?.map((item, index) => (
						<>
							<div className={s.content__images_div} ref={item.refImg}>
								<Image
									layout="responsive"
									width={500}
									height={280}
									src={item.img}
									alt={item.img}
									className={`${item.inter?.isIntersecting && s.activeImg}`}
								/>
							</div>
						</>
					))}
				</div>
				<div className={s.scroller}>
					<span
						style={{
							height: inter?.isIntersecting ? offset * 0.8 + "px" : "100px",
						}}
					></span>
				</div>
				<div className={s.texts}>
					{data?.map((item, index) => (
						<>
							<div className={s.content__text}>
								<h3 className={`${item.inter?.isIntersecting && s.lightTitle}`}>
									{item.title}
								</h3>
								<p className={`${item.inter?.isIntersecting && s.light}`}>
									{item.text}
								</p>
								<div className={s.bottomLine} ref={item.ref}></div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};

const Carousel = () => {
	const data = [
		{
			img: Img,
			title: "Функционирование",
			text: "Наш парк работает каждый день, предоставляя качественные услуги для всех посетителей. Все аттракционы, кафе и другие зоны развлечений поддерживаются в идеальном состоянии для вашего комфорта.",
		},
		{
			img: Img2,
			title: "Безопасность",
			text: "Наш основной приоритет — безопасность гостей. Мы регулярно проводим техническое обслуживание аттракционов и контролируем персонал для обеспечения безопасности.",
		},
		{
			img: Img3,
			title: "Разнобразие",
			text: "Мы стремимся и развлекать, и обучать. Наши VR-аттракционы, Activity-зона и Детский научный комплекс разработаны таким образом, чтобы стимулировать интерес к науке, технологиям и искусству.",
		},
	];
	return (
		<>
			<div className={s.carousel}>
				<div className={"container"}>
					<Swiper
						modules={[Navigation]}
						autoplay={{ delay: 1000 }}
						navigation={true}
					>
						{data.map((item, idx) => (
							<SwiperSlide key={idx}>
								<div className={s.card}>
									<Button variant={"primaryBIG"} br={20}>
										<Image
											layout="responsive"
											width={500}
											height={280}
											src={item.img}
											alt={item.img}
										/>
									</Button>
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};
