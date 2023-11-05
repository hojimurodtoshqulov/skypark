import scss from "./about.module.scss";
import Principle from "@/components/Principle";
import ZoneShowcase from "@/components/zoneShowcase";
import Certificates from "@/components/certificates";
import Mission from "@/components/mission/mission";
import Image from "next/image";
import OurGroup from "@/components/ourGroup/ourGroup";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import AnimationSection from "@/components/animationSection/animationSection";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const About = () => {
	const { t } = useTranslation();
	const showcaseData = {
		title: t("about.showcase.titleMain"),
		heading: t("about.showcase.title"),
		text: t("about.showcase.text"),
	};
	return (
		<>
			<div style={{ padding: "0 0 100px" }}>
				<div
					style={{
						padding: "0px 0 100px",
					}}
					className={scss.About}
				>
					<ZoneShowcase data={showcaseData} />
				</div>
				<AnimationSection>
					<div style={{ padding: "100px 0" }}>
						<Mission />
						<Principle />
					</div>
					<div className={scss.forAll}>
						<h2 className="container">
							{t("about.forAll.title1")} <br />
							<span>{t("about.forAll.title2")}</span> {t("about.forAll.title3")}
						</h2>
						<h2 className="container">
							<span>{t("about.forAll.title4")}</span>
						</h2>
						<div>
							<Image
								layout="responsive"
								width={1500}
								height={600}
								src="/images/gameZone1.png"
								alt="/images/gameZone1.png"
							/>
						</div>
					</div>
				</AnimationSection>
				<div style={{ padding: " 150px 0 50px" }}>
					<OurGroup />
				</div>
				<div style={{ padding: " 0 0 50px" }}>
					<Certificates />
				</div>
			</div>
		</>
	);
};

export default About;
