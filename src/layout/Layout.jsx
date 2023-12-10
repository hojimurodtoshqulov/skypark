import LanguageSwitcher from "@/components/LanguageSwitcher";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import scss from "./layout.module.scss";
import Footer from "./Footer";
import CTA from "@/components/cta";
// import video from "../assets/VM_animation.mp4";

export default function Layout({ children }) {
	const [active, setActive] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 6000);
	}, []);
	return (
		<>
			{active ? (
				<div className={scss.BG_video}>
					<div></div>
					<video
						src="/images/mainload.MP4"
						autoPlay
						muted
						playsInline
						style={{}}
						className={scss.video}
					></video>
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
