import Link from "next/link";
import s from "./footer.module.scss";
import logo from "../../../public/images/Sky-Park-LOGO 1.svg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Footer = () => {
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 2000);
	};
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.top}>
					<div className={s.left}>
						<h3>{t("home.footer.title1")}</h3>
						<p>
							{t("home.footer.location")}
							<span>{t("home.footer.locSpan")}</span>
						</p>
					</div>
					<div className={s.right}>
						<h3>{t("home.footer.title2")}</h3>
						<p>{t("home.footer.time")}</p>
					</div>
				</div>
				<div className={s.bottom}>
					<div className={s.left}>
						<Link className={s.logo} href={"/"}>
							<Image
								width={414}
								height={40}
								src={logo.src}
								alt={logo.src}
								layout="responsive"
							/>
						</Link>
						<div className={s.social}>
							<a
								href="https://instagram.com/skypark.tashkent?igshid=MzRlODBiNWFlZA=="
								target="_blank"
							>
								<BsInstagram />
							</a>
							<a href="https://t.me/skyparktashkent" target="_blank">
								<FaTelegramPlane />
							</a>
						</div>
						<p>Copyright © 2021. All rights reserved</p>
					</div>
					<div className={s.right}>
						<div>
							<Link href={"/about"}>{t("home.footer.link1")}</Link>
							<Link href={"/zone/1"}>{t("home.footer.link2")}</Link>
							<Link href={"/zone/2"}>{t("home.footer.link3")}</Link>
							<Link href={"/zone/3"}>{t("home.footer.link4")}</Link>
						</div>
						<div>
							<Link href={"/about"} onClick={scrollToTop}>
								{t("home.footer.link5")}
							</Link>
							<Link href={"/"}>{t("home.footer.link6")}</Link>
							<Link href={"/events"}>{t("home.footer.link7")}</Link>
							<Link href={"/contact"}>{t("home.footer.link8")}</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
