import Button from "../Button";
import s from "./form.module.scss";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Form = ({ closeModal }) => {
	const { t } = useTranslation();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
		closeModal();
	};
	return (
		<form
			onClick={(e) => e.stopPropagation()}
			className={s.form}
			onSubmit={handleSubmit}
		>
			<div className={s.heading}>
				<h3>{t("home.form.title")}</h3>
				{/* {typeof closeModal === "function" && (
          <span onClick={closeModal}>
            <FaXmark />
          </span>
        )} */}
			</div>
			<input
				type="text"
				placeholder={t("home.form.input1")}
				name="name"
				required
			/>
			<input
				type="text"
				placeholder={t("home.form.input2")}
				name="phone__number"
				required
			/>
			<Button variant={"secondary"} br={10}>
				{t("home.cta.btn")}
			</Button>
		</form>
	);
};

export default Form;
