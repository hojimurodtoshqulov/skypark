import Image from "next/image";
import Button from "../Button";
import s from "./certificates.module.scss";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Certificates = () => {
	const { t } = useTranslation();
	const cerfs = [
		{
			img: "/images/gameZone3.png",
		},
		{
			img: "/images/gameZone2.png",
		},
		{
			img: "/images/gameZone1.png",
		},
	];
	return (
		<div className={s.wrapper}>
			<div className="container">
				<h2> {t("about.certification.title")} </h2>
				<div className={s.grid}>
					{cerfs.map((i) => (
						<Button key={i} variant={"primaryBIG"} br={20}>
							<span>
								<Image
									layout="responsive"
									width={400}
									height={600}
									src={i.img}
									alt={i.img}
								/>
							</span>
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certificates;
