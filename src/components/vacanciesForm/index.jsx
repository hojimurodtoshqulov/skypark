import Button from "../Button";
import s from "./vacanciesForm.module.scss";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
const VacansiesForm = ({ closeModal, data, id }) => {
	const { t } = useTranslation();
	const [file, setFile] = useState(null);
	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleSendFile = () => {
		const botToken = "6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA";
		const chatId = "-1002001290085"; // Replace with your actual channel ID
		const formData = new FormData();
		formData.append("document", file);
		fetch(
			`https://api.telegram.org/bot${botToken}/sendDocument?chat_id=${chatId}`,
			{
				method: "POST",
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// Handle the response as needed
			})
			.catch((error) => {
				console.error("Error sending file:", error);
			});
	};
	const [formValues, setFormValues] = useState({
		project: "",
		name: "",
		phone: "",
	});
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		newData.project = data?.map((item) => (item.id == id ? item.title : null));
		setFormValues(newData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = formValues.name;
		const phone = formValues.phone;
		const project = formValues.project;
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1002001290085&text=${
				"\n        Vakansiya:" +
				project +
				"\n        Ismi:" +
				name +
				" " +
				"\n        Tel:" +
				phone
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					project: formValues.project,
					// project: formProject,
				})
				.then((res) => {
					// console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		// console.log("submit", formValues);
		setFormValues({ name: "", phone: "", project: "" });
		closeModal();
		const notify = () => toast.success(t("toast.vacansies"));
		notify();
	};
	return (
		<>
			<form
				onClick={(e) => e.stopPropagation()}
				className={s.form}
				onSubmit={handleSubmit}
			>
				{data?.map((item) =>
					id == item.id ? (
						<>
							{/* <Image layout="responsive" width={40} height={40} src={item.img} url={item.img} /> */}
							<div className={s.heading}>
								<h3>{item.title}</h3>
							</div>
							<input
								className={s.project}
								id="project"
								onChange={(e) => handle(e)}
								value={item.title}
								type="text"
								name="project"
								required
							/>
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
								type="tel"
								placeholder={t("home.form.input2")}
								name="phone__number"
								required
							/>
							<input
								className={s.inputFile}
								type="file"
								onChange={handleFileChange}
								placeholder={t("home.form.input2")}
							/>
							<p onClick={handleSendFile}>
								<Button variant={"secondary"} br={10}>
									{t("home.cta.btn")}
								</Button>
							</p>
						</>
					) : (
						console.log("itemId not found!!")
					)
				)}
			</form>
			{/* <ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/> */}
		</>
	);
};

export default VacansiesForm;
