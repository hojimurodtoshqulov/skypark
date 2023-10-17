import { Fragment } from "react";
import s from "./ZoneAbout.module.scss";
import Image from "next/image";
import { useState } from "react";

const ZoneAbout = ({ about }) => {
	const [select, setSelect] = useState(0);
	return (
		<>
			<div className={s.wrapper}>
				{about &&
					about.map((a, i) => (
						<div className={s.card} key={i}>
							<div className="container">
								<h2>{a.h2}</h2>
							</div>
							<div className={s.flex}>
								{}
								<div
									className={s.img}
									onClick={() => {
										select === a.image.length - 1
											? setSelect(0)
											: setSelect((prev) => prev + 1);
									}}
								>
									<Image
										width={666}
										height={636}
										layout="responsive"
										src={a.image[select]}
										alt={a.image[select]}
										key={select}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.4 }}
									/>
								</div>
								<div className={s.text}>
									<h3>{a.h4}</h3>
									<p>{a.p}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default ZoneAbout;
