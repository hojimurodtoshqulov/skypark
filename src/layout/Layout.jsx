import LanguageSwitcher from "@/components/LanguageSwitcher";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import scss from "./layout.module.scss";
import Footer from "./Footer";
import CTA from "@/components/cta";

export default function Layout({ children }) {
	const [active, setActive] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 10000);
	}, []);
	return (
		<>
			{active ? (
				<div className={scss.BG_video}>
					<div></div>
					<video muted playsInline className={scss.video}>
						<source src={"/images/mainload.mp4"} type="video/mp4" />
						<a href="https://archive.org/details/BigBuckBunny_124">
							download it
						</a>
					</video>
				</div>
			) : (
				<header className="app-header">
					<Navbar />
				</header>
			)}

			<main className="app-body">{children}</main>
			<footer className="app-footer">
				<CTA />
				<Footer />
			</footer>
		</>
	);
}
