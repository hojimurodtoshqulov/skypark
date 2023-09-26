import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Showcase from "@/components/showcase";

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
			<h1
				style={{
					height: "150vh",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Main app {t("hello")}
			</h1>
		</>
	);
}
