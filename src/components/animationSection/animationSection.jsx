import scss from "./animationSection.module.scss";
import { useTranslation } from "next-i18next";

const AnimationSection = ({ children }) => {
	return (
		<div className={scss.animation}>
			<div className={scss.animationChild}>{children}</div>
			<div className={scss.animationElements}>
				<div className={scss.animationElementsDiv1}></div>
				<div className={scss.animationElementsDiv2}></div>
				<div className={scss.animationElementsDiv3}></div>
				<div className={scss.animationElementsDiv4}></div>
				<div className={scss.animationElementsDiv5}></div>
				<div className={scss.animationElementsDiv6}></div>
				<div className={scss.animationElementsDiv7}></div>
			</div>
		</div>
	);
};

export default AnimationSection;
