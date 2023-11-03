import { FaArrowRight, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane, FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import s from "./social.module.scss";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const Social = () => {
	const { t } = useTranslation();
	const links = [
		{
			icon: <FiPhoneCall />,
			label: t("contact.net.call"),
			link: "tel:+998907886661",
		},
		{
			icon: <FaRegUser />,
			label: t("contact.net.admin"),
			link: "https://t.me/+998907886661",
		},
		{
			icon: <LiaTelegramPlane />,
			label: t("contact.net.teleg"),
			link: "https://t.me/skyparktashkent",
		},
		{
			icon: <FaInstagram />,
			label: t("contact.net.insta"),
			link: "https://instagram.com/skypark.tashkent?igshid=MzRlODBiNWFlZA==",
		},
	];
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.container}>
					<div>
						<h2>{t("contact.net.title")}</h2>
					</div>
					<div>
						<div className={s.links}>
							{links.map((l, i) => (
								<a href={l.link} target="_blank" key={i} className={s.link}>
									<div>
										<p>{l.icon}</p>
										<h3>{l.label}</h3>
									</div>
									<span>
										<FaArrowRight />
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Social;
