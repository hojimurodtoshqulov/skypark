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
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Principle = () => {
	const { t } = useTranslation();
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
	const { t } = useTranslation();

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
			title: t("home.principle.title1"),
			text:t("home.principle.text1"),
			inter: inter1,
			ref: ref1,
			refImg: refImg1,
		},
		{
			img: Img2,
			title: t("home.principle.title2"),
			text: t("home.principle.text2"),
			inter: inter2,
			ref: ref2,
			refImg: refImg2,
		},
		{
			img: Img3,
			title:t("home.principle.title3"),
			text: t("home.principle.text3"),
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
	const { t } = useTranslation();

	const data = [
		{
			img: Img,
			title: t("home.principle.title1"),
			text: t("home.principle.text1"),
		},
		{
			img: Img2,
			title:t("home.principle.title2"),
			text: t("home.principle.text2"),
		},
		{
			img: Img3,
			title: t("home.principle.title3"),
			text: t("home.principle.text3"),
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
