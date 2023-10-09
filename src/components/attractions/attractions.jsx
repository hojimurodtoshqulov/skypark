import CardZone from "../cardZone/cardZone";
import scss from "./attractions.module.scss";
import { useRef, useEffect, useState } from "react";
import useIntersectionObserver from "../InterSectionObserver";

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
							left: inter?.isIntersecting ? offset * -0.01 + "vw" : "0vw",
						}}
					>
						{data.map((item) => (
							<>
								<CardZone id={item.id} img={item.img} title={item.title} text={item.text} />
							</>
						))}
					</div>
				</div>
				<div className="container">
					<div className={scss.attractions_lineBottom}>
						<span
							style={{
								width: inter?.isIntersecting ? offset * 0.2 + "px" : "100px",
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
