import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
	const router = useRouter();
	const ref = useRef(null);
	const [currentLang, setCurrentLang] = useState("ru");
	function myFunction() {
		ref.current?.classList.toggle("show");
	}
	const langBtnClick = (lang) => {
		localStorage.setItem("lang", lang);
		console.log("lang>>>", lang);
		setCurrentLang(lang);
		myFunction();
		console.log("target>>>", lang.target);
	};
	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "ru");
		} else {
			setCurrentLang(localStorage.getItem("lang"));
		}
	}, []);
	// console.log("localStorage.getItem('lang')>>>", localStorage.getItem("lang"));
	const langs = ["ru", "uz", "en"];
	return (
		<div className="flex space-x-2">
			<select
				key={0}
				className="p-2 border border-red-900 focus:ring-2 focus:outline-none focus:ring-red-700 rounded-md cursor-pointer"
				onChange={(e) =>
					router.push(
						{
							pathname: router.pathname,
							query: router.query,
						},
						null,
						{ locale: e.target.value }
					)
				}
			>
				{console.log("lang>>", router)}
				{langs?.map((item, index) => (
					<>
						<option value={item} key={index} onClick={() => langBtnClick(item)}>
							{item}
						</option>
					</>
				))}
			</select>
		</div>
	);
}
