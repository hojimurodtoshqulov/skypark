import Link from "next/link";
import s from "./footer.module.scss";
import logo from "../../../public/images/Sky-Park-LOGO 1.svg";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaUser } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BiSolidPhoneCall } from "react-icons/bi";
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
							<a
								href="https://www.google.com/maps/place/Tashkent+City+Mall/@41.3156856,69.2560337,16z/data=!4m14!1m7!3m6!1s0x38ae8b48a35ed52f:0x6d868958ae00961!2sTashkent+City+Mall!8m2!3d41.3161731!4d69.2524288!16s%2Fg%2F11t7x_68wk!3m5!1s0x38ae8b48a35ed52f:0x6d868958ae00961!8m2!3d41.3161731!4d69.2524288!16s%2Fg%2F11t7x_68wk?entry=ttu"
								target={"_blank"}
							>
								{t("home.footer.location")}
								<span>{t("home.footer.locSpan")}</span>
							</a>
						</p>
					</div>
					<div className={s.right}>
						<h3>{t("home.footer.title2")}</h3>
						<p>{t("home.footer.time1")}</p>
						<p>{t("home.footer.time2")}</p>
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
							<a
								href="https://t.me/+998907886661"
								target="_blank"
								className={s.social_user}
							>
								<FaUser />
								<span>
									<FaTelegramPlane />
								</span>
							</a>
							<a href="tel:+998907886661" target="_blank">
								<BiSolidPhoneCall />
							</a>
						</div>
						{/* <p>Copyright © 2021. All rights reserved</p> */}
					</div>
					<div className={s.right}>
						<div>
							<Link href={"/about"}>{t("home.footer.link1")}</Link>
							<Link href={"/zone/3"}>{t("home.footer.link4")}</Link>
							<Link href={"/zone/2"}>{t("home.footer.link3")}</Link>
							<Link href={"/zone/1"}>{t("home.footer.link2")}</Link>
						</div>
						<div>
							<Link href={"/contact"}>{t("home.footer.link8")}</Link>
							<Link href={"/vacancies"}>{t("home.footer.link6")}</Link>
							<Link href={"/achievements"} onClick={scrollToTop}>
								{t("home.footer.link5")}
							</Link>
							<Link href={"/events"}>{t("home.footer.link7")}</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
