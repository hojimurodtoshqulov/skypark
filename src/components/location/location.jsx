import scss from "./location.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { MdLocationPin } from "react-icons/md";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Location = () => {
	const { t } = useTranslation();
	return (
		<a
			href="https://www.google.com/maps/place/Tashkent+City+Mall/@41.3156856,69.2560337,16z/data=!4m14!1m7!3m6!1s0x38ae8b48a35ed52f:0x6d868958ae00961!2sTashkent+City+Mall!8m2!3d41.3161731!4d69.2524288!16s%2Fg%2F11t7x_68wk!3m5!1s0x38ae8b48a35ed52f:0x6d868958ae00961!8m2!3d41.3161731!4d69.2524288!16s%2Fg%2F11t7x_68wk?entry=ttu"
			target="_blank"
			className={scss.map}
		>
			<Image
				layout="responsive"
				width={1500}
				height={600}
				src="/images/Map.png"
				alt="Location"
			/>
			<MdLocationPin />
		</a>
	);
};

export default Location;
