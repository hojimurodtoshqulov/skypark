import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/images/Sky-Park-LOGO2.png";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	const route = useRouter();
	const isHome =
		route.pathname === "/" || route.pathname.startsWith("/products");

	// changeColor();

	useEffect(() => {
		const changeColor = () => {
			if (!ref.current) return;
			if (window.pageYOffset === 0) {
				ref.current.style.setProperty("--color", isHome ? "white" : "grey");
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
				scrollPosition < currentScrollPos && currentScrollPos > 100
					? "0 -100%"
					: "0";
			setScrollPosition(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);
	return (
			<nav className={`${styles.navbar} container`} ref={ref}>
				<Link href="/" className={`${styles.navbar_logo}`}>
					<Image src={logo.src} alt={logo.src} width={200} height={20} />
					<img />
				</Link>
				<div className={`${styles.navbar_linksDiv}`}>
					<Link href="/">Аттракционы</Link>
					<Link href="/">Мероприятия</Link>
					<Link href="/">О парке</Link>
					<Link href="/">Контакты</Link>
					<LanguageSwitcher />
				</div>
			</nav>
	);
}

export default Navbar;
