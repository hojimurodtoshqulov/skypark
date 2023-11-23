import Button from "../Button";
import { useTranslation } from "next-i18next";
import scss from "./count.module.scss";
import Scrambles from "../scrambles/scrambles";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Count = () => {
	const { t } = useTranslation();
	const [selected, setSelected] = useState(0);
	const title1Data = [
		{
			title: "5 000",
		},
		{
			title: "5 000",
		},
	];
	const title2Data = [
		{
			title: "50",
		},
		{
			title: "50",
		},
	];
	const title3Data = [
		{
			title: "Capito",
		},
		{
			title: "Capito",
		},
	];
	const tLength = title1Data.length;
	useEffect(() => {
		const interval = setInterval(() => {
			selected === tLength - 1
				? setSelected(0)
				: setSelected((prev) => (prev === 0 ? 1 : 0));
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={scss.Count}>
			<div className="container">
				<div className={scss.count}>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<AnimatePresence exitBeforeEnter>
								<h2 className={scss.for__font}>
									<Scrambles text={title1Data[selected].title} speed={0.3} />м
									<sup>2</sup>
								</h2>
							</AnimatePresence>
							<p>{t("home.category.title1")}</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<AnimatePresence exitBeforeEnter>
								<h2 className={scss.for__font}>
									<Scrambles text={title2Data[selected].title} speed={0.1} />+
								</h2>
							</AnimatePresence>
							<p>{t("home.category.title2")}</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<AnimatePresence exitBeforeEnter>
								<h2 className={scss.for__font}>
									<Scrambles text={title3Data[selected].title} speed={0.3} />+
								</h2>
							</AnimatePresence>
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
