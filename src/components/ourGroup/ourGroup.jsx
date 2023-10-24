import scss from "./ourGroup.module.scss";
import Button from "../Button";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Img from "../../../public/images/gameZone1.png";
import Img2 from "../../../public/images/gameZone2.png";
import Img3 from "../../../public/images/gameZone3.png";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const OurGroup = () => {
	const { t } = useTranslation();
	const data = [
		{
			img: Img,
		},
		{
			img: Img2,
		},
		{
			img: Img3,
		},
	];
	return (
		<div className={`${scss.ourGroup} container`}>
			<h2> {t("about.ourGroup.title")} </h2>
			<div className={scss.ourGroup_images}>
				<div className={scss.ourGroup_imagesImg1Div}>
					<Button variant={"primaryBIG"} br={20}>
						<Image
							layout="responsive"
							width={500}
							height={280}
							src={Img}
							alt={Img}
						/>
					</Button>
				</div>
				<div className={scss.ourGroup_imagesImg2Div}>
					<Swiper
						modules={[Navigation]}
						autoplay={{ delay: 1000 }}
						navigation={true}
					>
						{data.map((item, idx) => (
							<SwiperSlide key={idx}>
								<div className={scss.card}>
									<Button variant={"primaryBIG"} br={20}>
										<Image
											layout="responsive"
											width={500}
											height={280}
											src={item.img}
											alt={item.img}
										/>
									</Button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default OurGroup;
