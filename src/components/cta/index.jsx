import { useState } from "react";
import Button from "../Button";
import Form from "../form";
import Modal from "../modal";
import s from "./cta.module.scss";
import { useTranslation } from "next-i18next";
import Scrambles from "../scrambles/scrambles";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const CTA = () => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={s.wrapper}>
				<video
					// controls
					src="/images/earth.mp4"
					poster="/images/cta-bg.png"
					autoPlay
					muted
					loop
				>
					<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				</video>
				<div className="container">
					<h2>
						<Scrambles text={t("home.cta.title")} speed={0.3} />{" "}
					</h2>
					<p>{t("home.cta.text")}</p>
					<div className={s.btn}>
						<Button
							variant={"secondary"}
							onClick={() => {
								setOpen(true);
								console.log("click");
							}}
							br={10}
						>
							{t("home.cta.btn")}
						</Button>
					</div>
				</div>
			</div>
			<Modal open={open} setOpen={setOpen} width={40}>
				<Form closeModal={() => setOpen(false)} />
			</Modal>
		</>
	);
};

export default CTA;
