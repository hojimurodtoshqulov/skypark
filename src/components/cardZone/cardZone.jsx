import scss from "./cardZone.module.scss";
import Image from "next/image";
const CardZone = ({ img, title, text }) => {
	return (
		<div className={scss.card}>
			<Image src={img} width={580} height={354} alt={img} loading="lazy" />
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default CardZone;