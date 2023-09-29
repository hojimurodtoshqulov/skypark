import scss from "./cardZone.module.scss";

const CardZone = ({ img, title, text }) => {
	return (
		<div className={scss.card}>
			<img src={img} alt={img} />
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default CardZone;
