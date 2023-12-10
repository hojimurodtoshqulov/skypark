import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "../../../public/images/Sky-Park-LOGO 1.svg";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import CardZone from "@/components/cardZone/cardZone";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import Sidebar from "../Sidebar";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

function Navbar() {
	const { t } = useTranslation();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	const drop = useRef(null);
	const route = useRouter();
	const isHome =
		route.pathname === "/" || route.pathname.startsWith("/about");
	useEffect(() => {
		const changeColor = () => {
			if (!ref.current) return;
			if (window.pageYOffset === 0) {
				ref.current.style.setProperty("--color", isHome ? "white" : "white");
				ref.current.style.backdropFilter = `blur(${0}px)`;
				// ref.current.style.borderBottom = "0px solid #BBE4EA";
				ref.current.style.background = "#5a15a6";
			} else {
				ref.current.style.setProperty("--color", "white");
				ref.current.style.backdropFilter = `blur(${5}px)`;
				// ref.current.style.borderBottom = "1px solid #BBE4EA";
				ref.current.style.background = "#5b15a6a9 ";
			}
		};
		const handleScroll = () => {
			changeColor();
			if (!ref.current) return;
			const currentScrollPos = window.pageYOffset;
			ref.current.style.translate =
				scrollPosition < currentScrollPos && currentScrollPos > 150
					? "0 -100%"
					: "0";
			setScrollPosition(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);

	const enter = () => {
		if (drop.current) {
			drop.current.style.top = "-10px";

		}
	};
	const leave = () => {
		if (drop.current) {
			drop.current.style.top = "-550px";
		}
	};

	return (
		<>
			<nav className={`${styles.navbar}`} ref={ref}>
				<div className="container">
					<div className={styles.flex}>
						<Link href="/" className={`${styles.navbar_logo}`}>
							<Image src={logo.src} alt={logo.src} width={200} height={20} />
						</Link>
						<div className={`${styles.navbar_linksDiv}`}>
							<Link href="/zone-1" onMouseEnter={enter} onMouseLeave={leave}>
								{t("home.nav.atractions")}
							</Link>
							<Link href="/events">{t("home.nav.events")}</Link>
							<Link href="/about">{t("home.nav.about")}</Link>
							<Link href="/price">{t("home.nav.price")}</Link>
							<Link href="/vacancies">{t("home.nav.vacancies")}</Link>
							<Link href="/contact">{t("home.nav.contact")}</Link>
							<LanguageSwitcher />
							<button
								className={styles.sidebar_toggle}
								onClick={() => setIsOpen((p) => !p)}
							>
								{isOpen ? <FaXmark /> : <RxHamburgerMenu />}
							</button>
						</div>
					</div>
				</div>
			</nav>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div
				ref={drop}
				className={styles.dropdown}
				onMouseEnter={enter}
				onMouseLeave={leave}
				onClick={() => {
					enter();
					leave();
				}}
			>
				<DropDown />
			</div>
		</>
	);
}

export default Navbar;

const DropDown = () => {
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
			<div className="container">
				<div className={styles.cards__container}>
					{attractionsData.map((item, index) => (
						<Fragment key={index}>
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
			</div>
		</>
	);
};
