import scss from "./attractions.module.scss";

const Attractions = ({}) => {
	return (
		<div className={scss.attractions}>
			<h2 className="container">Аттракционы</h2>
			<div className={scss.attractions_cards}>
				<div className={scss.card}>
					<img src="" alt="" />
					<h3>Зона 1</h3>
					<p>Детский научный комплекс (ДНК)</p>
				</div>
				<div className={scss.card}>
					<img src="" alt="" />
					<h3>Зона 2</h3>
					<p>VR - зона</p>
				</div>
				<div className={scss.card}>
					<img src="" alt="" />
					<h3>Зона 3</h3>
					<p>Activity zone</p>
				</div>
			</div>
		</div>
	);
};

export default Attractions;
