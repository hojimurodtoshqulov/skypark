import Button from "../Button";
import { useTranslation } from "next-i18next";
import scss from "./count.module.scss";
import Scrambles from "../scrambles/scrambles";
// export const getStaticProps = async ({ locale }) => ({
// 	props: {
// 		...(await serverSideTranslations(locale, ["common"])),
// 	},
// });

const Count = () => {
	const { t } = useTranslation();
	return (
		<div className={scss.Count}>
			<div className="container">
				<div className={scss.count}>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>
								<Scrambles text={"5 000"} speed={0.1} />м<sup>2</sup>
							</h2>
							<p>{t("home.category.title1")}</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>
								<Scrambles text={"50"} speed={0.1} />+
							</h2>
							<p>{t("home.category.title2")}</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>
								<Scrambles text={"Capito"} speed={0.1} />
							</h2>
							<p>{t("home.category.title3")}</p>
						</div>
					</Button>
				</div>
			</div>
			{/* <Light color={"fiolet"} style={{ top: "50px", left: "50px" }} />
			<Light color={"white"} style={{ top: "-50px", right: "-70px" }} /> */}
		</div>
	);
};

export default Count;
