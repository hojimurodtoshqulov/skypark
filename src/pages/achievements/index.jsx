import Certificates from "@/components/certificates";
import OurGroup from "@/components/ourGroup/ourGroup";
import scss from "./achievements.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const Achievements = () => {
	return (
		<div className={scss.achievements}>
			<div style={{ padding: " 0px 0 50px" }}>
				<Certificates />
			</div>
			<div style={{ padding: " 0 0 100px" }}>
				<OurGroup />
			</div>
		</div>
	);
};

export default Achievements;
