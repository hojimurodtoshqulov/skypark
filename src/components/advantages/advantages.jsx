import scss from "./advantages.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const Advantages = () => {
	const { t } = useTranslation();
	const ref = useRef(null);
	const inter = useIntersectionObserver(ref, {});
	const data = [
		{
			img: "/images/advantages-laptop.png",
			title: t("home.advantages.title1"),
			text: t("home.advantages.text1"),
		},
		{
			img: "/images/advantages-richag.png",
			title: t("home.advantages.title2"),
			text: t("home.advantages.text2"),
		},
		{
			img: "/images/advantages-globus1.png",
			title: t("home.advantages.title3"),
			text: t("home.advantages.text3"),
		},
		{
			img: "/images/advantages-sandclock.png",
			title: t("home.advantages.title4"),
			text: t("home.advantages.text4"),
		},
		{
			img: "/images/advantages-globus2.png",
			title: t("home.advantages.title5"),
			text: t("home.advantages.text5"),
		},
		{
			img: "/images/advantages-rocket.png",
			title: t("home.advantages.title6"),
			text: t("home.advantages.text6"),
		},
	];
	return (
		<div className={`${scss.advantagesBG} container`} ref={ref} id="contact">
			<div
				className={`${inter?.isIntersecting && scss.advantagesB} ${
					scss.advantages
				}`}
			>
				{data?.map((item, index) => (
					<div className={scss.advantages_card} key={index}>
						<Image src={item.img} width={50} height={50} alt={item.img} />
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Advantages;