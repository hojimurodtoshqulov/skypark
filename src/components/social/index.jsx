import { FaArrowRight, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane, FaFacebookF, FaYoutube } from "react-icons/fa";
import s from "./social.module.scss";
import { useTranslation } from "next-i18next";
const Social = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.container}>
					<div>
						<h2>Соц-сети</h2>
					</div>
					<div>
						<div className={s.links}>
							{links.map((l, i) => (
								<a href={l.link} target="_blank" key={i} className={s.link}>
									<div>
										<span>{l.icon}</span>
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

const links = [
	{
		icon: <FaYoutube />,
		label: "Youtube",
		link: "https://youtube.com",
	},
	{
		icon: <FaFacebookF />,
		label: "Facebook",
		link: "https://facebook.com",
	},
	{
		icon: <FaTelegramPlane />,
		label: "Telegram",
		link: "https://t.me/skyparktashkent",
	},
	{
		icon: <FaInstagram />,
		label: "Instagram",
		link: "https://instagram.com/skypark.tashkent?igshid=MzRlODBiNWFlZA==",
	},
];