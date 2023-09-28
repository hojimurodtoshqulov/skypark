import scss from "./attractions.module.scss";

const Attractions = ({}) => {
	return (
		<div className={scss.attractions}>
			<h2 className="container">Аттракционы</h2>
			<div className={scss.attractions_cards}>
				<div className={scss.card}>
					<img src="/images/gameZone1.png" alt="gameZone1" />
					<h3>Зона 1</h3>
					<p>Детский научный комплекс (ДНК)</p>
				</div>
				<div className={scss.card}>
					<img src="/images/gameZone2.png" alt="gameZone2" />
					<h3>Зона 2</h3>
					<p>VR - зона</p>
				</div>
				<div className={scss.card}>
					<img src="/images/gameZone3.png" alt="gameZone3" />
					<h3>Зона 3</h3>
					<p>Activity zone</p>
				</div>
				<div className={scss.card}>
					<img src="/images/gameZone1.png" alt="gameZone1" />
					<h3>Зона 4</h3>
					<p>Activity zone</p>
				</div>
			</div>
		</div>
	);
};

export default Attractions;
