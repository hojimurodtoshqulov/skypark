import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Showcase from "@/components/showcase";
import Count from "@/components/count/count";
import AboutUs from "@/components/aboutUs/aboutUs";
import Principle from "@/components/Principle";
import Attractions from "@/components/attractions/attractions";
import Video from "@/components/video/video";
import Advantages from "@/components/advantages/advantages";
import CTA from "@/components/cta";
import Month from "@/components/month/month";

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default function Home() {
	const { t } = useTranslation();
	// const { locale, t } = useLocale();
	{
		/* <CardZone

				<CardZone  />
				<CardZone

				/>
				<CardZone

				/> */
	}
	const attractionsData = [
		{
			img: "/images/gameZone1.png",
			title: "Зона 1",
			text: "Детский научный комплекс (ДНК)",
		},
		{ img: "/images/gameZone2.png", title: "Зона 2", text: "VR - зона" },
		{ img: "/images/gameZone3.png", title: "Зона 3", text: "Activity zone" },
		{ img: "/images/gameZone1.png", title: "Зона 4", text: "Activity zone" },
	];
	return (
		<>
			<SEO />
			<Showcase />
			<Count />
			<AboutUs />
			<Principle />
			<Attractions data={attractionsData} />
			<Video />
			<div style={{ background: "#231F20" }}>
				<Advantages />
				<Month />
			</div>
			<CTA />
		</>
	);
}
