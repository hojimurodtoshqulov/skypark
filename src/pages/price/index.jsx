import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import s from "./price.module.scss";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const data = [
	{
		name: "Стандарт",
		categs: [
			{
				category: "Стандарт",
				color: "#9277FF",
				price_uzs: 240_000,
				price_usd: 19.6,
			},
			{
				category: "Скидка 30%",
				color: "#77ADFF",
				price_uzs: 168_000,
				price_usd: 13.7,
			},
			{
				category: "Скидка 50%",
				color: "#F26969",
				price_uzs: 120_000,
				price_usd: 19.6,
			},
		],
	},
	{
		name: "Kids - детский",
		categs: [
			{
				category: "KIDS",
				color: "#b3b3b3",
				price_uzs: 168_000,
				price_usd: 13.7,
			},
			{
				category: "Скидка 30%",
				color: "#ff6",
				price_uzs: 128_000,
				price_usd: 9.6,
			},
			{
				category: "Скидка 50%",
				color: "#F269BB",
				price_uzs: 84_000,
				price_usd: 6.9,
			},
		],
	},
	{
		name: "Групповые",
		categs: [
			{
				category: "Взрослый 30%",
				color: "#665EC7",
				price_uzs: 168_000,
				price_usd: 13.7,
			},
			{
				category: "Детский 30%",
				color: "#DE9703",
				price_uzs: 128_000,
				price_usd: 9.6,
			},
		],
	},
];

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Price = () => {
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);

	return (
		<AnimatePresence>
			<div className={s.wrapper}>
				<div className="container">
					<div className={s.heading}>
						<div className={s.monthTitle}>
							<span
								className={s.monthTitle_arrow}
								onClick={() => {
									select === 0
										? setSelect(data.length - 1)
										: setSelect((prev) => prev - 1);
								}}
							>
								<FaChevronLeft />
							</span>
							<AnimatePresence>
								<motion.h2
									key={data[select].name}
									initial={{ y: -50 }}
									animate={{ y: 0 }}
									exit={{ y: 50 }}
									transition={{ duration: 0.7 }}
								>
									{data[select].name}
								</motion.h2>
							</AnimatePresence>
							<span
								className={s.monthTitle_arrow}
								onClick={() => {
									select === data.length - 1
										? setSelect(0)
										: setSelect((prev) => prev + 1);
								}}
							>
								<FaChevronRight />
							</span>
						</div>
						<h3 className={s.dollar}>
							Курс даллара: <span>12 250</span>
						</h3>
					</div>
					<div className={s.grid}>
						<div className={s.detail}>
							<h3>Категория клиента</h3>
							{data[select].categs.map((item) => (
								<>
									<motion.h2
										key={item.category}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}
										transition={{ duration: 0.7 }}
									>
										{item.category}
									</motion.h2>
								</>
							))}
						</div>
						<div className={s.detail}>
							<h3>Цвет браслета</h3>
							{data[select].categs.map((item) => (
								<>
									<motion.div
										key={item.color}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}
										transition={{ duration: 0.7 }}
										className={s.color}
										style={{ background: item.color }}
									></motion.div>
								</>
							))}
						</div>
						<div className={s.detail}>
							<h3>Цена, сум</h3>
							{data[select].categs.map((item) => (
								<>
									<motion.h2
										key={item.price_uzs}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}
										transition={{ duration: 0.7 }}
									>
										{item.price_uzs}
									</motion.h2>
								</>
							))}
						</div>
						<div className={s.detail}>
							<h3>Цена, $</h3>
							{data[select].categs.map((item) => (
								<>
									<motion.h2
										key={item.price_usd}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}
										transition={{ duration: 0.7 }}
									>
										{item.price_usd}
									</motion.h2>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
};

export default Price;
