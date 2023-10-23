import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import FAQ from "@/components/faq";
import AnimationSection from "@/components/animationSection/animationSection";
import { useTranslation } from "next-i18next";

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
	];
	return (
		<>
			<SEO />
			<Showcase />
			<Count />
			<AboutUs />
			<Principle />
			<Attractions data={attractionsData} />
			<Video
				height={100}
				src="/images/earth.mp4"
				imgSrc="/images/gameZone1.png"
			/>
			<AnimationSection>
				<Advantages />
				<Month />
				<FAQ />
			</AnimationSection>
		</>
	);
}
