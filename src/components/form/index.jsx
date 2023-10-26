import Button from "../Button";
import s from "./form.module.scss";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Form = ({ closeModal }) => {
	const { t } = useTranslation();
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
	});
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		setFormValues(newData);
		console.log(newData);
	};
	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const name = formValues.name.value;
	// 	const phone = formValues.phone.value;
	// 	try {
	// 		const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1001813491900&text=${
	// 			"\n        Ismi:" +
	// 			formValues.name +
	// 			" " +
	// 			"\n        Tel:" +
	// 			formValues.phone
	// 		}`;
	// 		await axios
	// 			.post(url, {
	// 				name: formValues.name,
	// 				phone: formValues.phone,
	// 				// project: formProject,
	// 			})
	// 			.then((res) => {
	// 				console.log(res.data);
	// 			});
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// 	console.log("submit", formValues);
	// 	setFormValues({ name: "", phone: "" });
	// };
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
		e.preventDefault();
		const name = formValues.name.value;
		const phone = formValues.phone.value;
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1002060762013&text=${
				"\n        Ismi:" +
				formValues.name +
				" " +
				"\n        Tel:" +
				formValues.phone
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					// project: formProject,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		console.log("submit", formValues);
		setFormValues({ name: "", phone: "" });
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
			</div>
			<input
				id="name"
				onChange={(e) => handle(e)}
				value={formValues.name}
				type="text"
				placeholder={t("home.form.input1")}
				name="name"
				required
			/>
			<input
				id="phone"
				onChange={(e) => handle(e)}
				value={formValues.phone}
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
