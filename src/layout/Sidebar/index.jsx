import Link from "next/link";
import s from "./sidebar.module.scss";
import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import CardZone from "@/components/cardZone/cardZone";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Sidebar = ({ isOpen, setIsOpen }) => {
	const { t } = useTranslation();
	const [scrollPosition, setScrollPosition] = useState(0);
	const ref = useRef(null);
	const [active, setActive] = useState(false);
	return (
		<>
			<AnimatePresence>
				{isOpen ? (
					<motion.div>
						<div className={s.wrapper} ref={ref}>
							<motion.div
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Acc
									setIsOpen={setIsOpen}
									active={active}
									setActive={setActive}
								/>
							</motion.div>
							<motion.div
								onClick={() => setIsOpen(false)}
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								<Link
									className={`${s.link_head} ${active ? s.blur : ""}`}
									href="/events"
								>
									<h2>{t("home.nav.events")}</h2>
									<span>
										<BiRightArrowAlt />
									</span>
								</Link>
							</motion.div>
							<motion.div
								onClick={() => setIsOpen(false)}
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
							>
								<Link
									className={`${s.link_head} ${active ? s.blur : ""}`}
									href="/about"
								>
									<h2>{t("home.nav.about")}</h2>
									<span>
										<BiRightArrowAlt />
									</span>
								</Link>
							</motion.div>
							<motion.div
								onClick={() => setIsOpen(false)}
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.6 }}
							>
								<Link
									className={`${s.link_head} ${active ? s.blur : ""}`}
									href="/price"
								>
									<h2>{t("home.nav.price")}</h2>
									<span>
										<BiRightArrowAlt />
									</span>
								</Link>
							</motion.div>
							<motion.div
								onClick={() => setIsOpen(false)}
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.8 }}
							>
								<Link
									className={`${s.link_head} ${active ? s.blur : ""}`}
									href="/vacancies"
								>
									<h2>{t("home.nav.vacancies")}</h2>
									<span>
										<BiRightArrowAlt />
									</span>
								</Link>
							</motion.div>
							<motion.div
								onClick={() => setIsOpen(false)}
								initial={{
									opacity: 0,
									x: 100,
								}}
								exit={{
									opacity: 0,
									x: 100,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 1 }}
							>
								<Link
									className={`${s.link_head} ${active ? s.blur : ""}`}
									href="/contact"
									style={{ borderBottom: "2px solid #665ec7" }}
								>
									<h2>{t("home.nav.contact")}</h2>
									<span>
										<BiRightArrowAlt />
									</span>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	);
};

export default Sidebar;

const Acc = ({ setIsOpen, active, setActive }) => {
	const { t } = useTranslation();
	return (
		<>
			<div className={`${s.accordion__item} `}>
				<div
					onClick={() => setActive((p) => !p)}
					style={{ color: !active ? "#fff" : "#bbe4ae" }}
				>
					<a className={s.link_head}>
						<h2 className={active ? s.colorWhite : s.colorPrimary}>
							{t("home.nav.atractions")}
						</h2>
						<span className={!active ? s.toTop : s.toDown}>
							<BiRightArrowAlt />
						</span>
					</a>
				</div>
				<AnimatePresence>
					{active ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								// height: "max-content",
								transition: {
									duration: 0.3,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
							exit={{
								opacity: 0,
								// height: 0,
								transition: {
									duration: 0.3,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
							}}
						>
							<DropDown setIsOpen={setIsOpen} />
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</>
	);
};

const DropDown = ({ setIsOpen }) => {
	const { t } = useTranslation();
	const attractionsData = [
		{
			id: 1,
			img: "/images/gameZone1.png",
			title: t("home.attractions.title1"),
			text: t("home.attractions.text1"),
		},
		{
			id: 2,
			img: "/images/gameZone2.png",
			title: t("home.attractions.title2"),
			text: t("home.attractions.text2"),
		},
		{
			id: 3,
			img: "/images/gameZone3.png",
			title: t("home.attractions.title3"),
			text: t("home.attractions.text3"),
		},
		{
			id: 4,
			img: "/images/zone4.jpg",
			title: t("home.attractions.title4"),
			text: t("home.attractions.text4"),
		},
	];
	return (
		<>
			<div className={s.cards__container} onClick={() => setIsOpen((p) => !p)}>
				{attractionsData.map((item, idx) => (
					<Fragment key={idx}>
						<CardZone
							id={item.id}
							img={item.img}
							title={item.title}
							text={item.text}
							withBorder
						/>
					</Fragment>
				))}
			</div>
		</>
	);
};
