import CardZone from "../cardZone/cardZone";
import scss from "./attractions.module.scss";
import { useRef, useEffect, useState } from "react";
import useIntersectionObserver from "../InterSectionObserver";
import { useTranslation } from "next-i18next";
const Attractions = ({ data }) => {
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		window.addEventListener("scroll", function () {
			setOffset(window.pageYOffset);
		});
	});
	const ref1 = useRef(null);
	const inter = useIntersectionObserver(ref1, {});
	return (
		<div className={scss.Attractions}>
			<div
				className={`${scss.attractions} ${
					inter?.isIntersecting ? scss.active : scss.attractions
				}`}
				ref={ref1}
				// style={{ top: offset * 0.3 + "px" }}
			>
				<h2 className="container">Аттракционы</h2>
				{console.log("offset>>>", offset)}
				<div className={scss.attractions_cards}>
					<div
						className={scss.attractions_cardsEls}
						style={{
							left: inter?.isIntersecting ? offset * -0.18 + "px" : "0px",
						}}
					>
						{data.map((item) => (
							<>
								<CardZone
									id={item.id}
									img={item.img}
									title={item.title}
									text={item.text}
								/>
							</>
						))}
					</div>
				</div>
				<div className="container">
					<div className={scss.attractions_lineBottom}>
						<span
							style={{
								width: inter?.isIntersecting ? offset * 0.64 + "px" : "100px",
							}}
						></span>
					</div>
				</div>
			</div>
			{/* <Scroller /> */}
		</div>
	);
};

export default Attractions;
