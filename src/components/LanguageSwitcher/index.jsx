import scss from "./LanguageSwitcher.module.scss";
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
		// console.log("lang>>>", lang);
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
		<div
			className={scss.langsDiv}
			key={0}
			onClick={(e) =>
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
			{console.log("lang>>", router.locale)}
			<p className={scss.langsP}>{router.locale}</p>
			<span className={scss.langs}>
				{langs?.map((item, index) => (
					<option value={item} key={index} onClick={() => langBtnClick(item)}>
						{item}
					</option>
				))}
			</span>
		</div>
	);
}
