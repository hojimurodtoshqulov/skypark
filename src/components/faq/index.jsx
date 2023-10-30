import { useState, Fragment } from "react";
import s from "./faq.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/images/pattern1.png";
import { useTranslation } from "next-i18next";
import Scrambles from "../scrambles/scrambles";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const FAQ = () => {
	const { t } = useTranslation();
	const data = [
		{
			title: t("home.faq.title1"),
			text: t("home.faq.text1"),
		},
		{
			title: t("home.faq.title2"),
			text: t("home.faq.text2"),
		},
		{
			title: t("home.faq.title3"),
			text: t("home.faq.text3"),
		},
		{
			title: t("home.faq.title4"),
			text: t("home.faq.text4"),
		},
		{
			title: t("home.faq.title5"),
			text: t("home.faq.text5"),
		},
		{
			title: t("home.faq.title6"),
			text: t("home.faq.text6"),
		},
		{
			title: t("home.faq.title7"),
			text: t("home.faq.text7"),
		},
		{
			title: t("home.faq.title8"),
			text: t("home.faq.text8"),
		},
	];
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.container}>
					<div className={s.container_tite}>
						<h2>
							<Scrambles text={t("home.faq.question")} speed={0.2} />
						</h2>
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
