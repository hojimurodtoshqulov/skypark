import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Showcase from "@/components/showcase";
import Count from "@/components/count/count";
import AboutUs from "@/components/aboutUs/aboutUs";
import Principle from "@/components/Principle";

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default function Home() {
	const { t } = useTranslation();
	// const { locale, t } = useLocale();
	return (
		<>
			<SEO />
			<Showcase />
			<Count />
			<AboutUs />
			<Principle />
		</>
	);
}
