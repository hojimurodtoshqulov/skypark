import Button from "../Button";
// import Light from "../light/light";
import scss from "./count.module.scss";

const Count = () => {
	return (
		<div className={scss.Count}>
			<div className="container">
				<div className={scss.count}>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>5 000 м<sup>2</sup></h2>
							<p>Квадратура</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>50+</h2>
							<p>Количество аттракционов</p>
						</div>
					</Button>
					<Button variant="primaryBIG" br={20}>
						<div className={scss.btn__content}>
							<h2>Capito</h2>
							<p>Кафе</p>
						</div>
					</Button>
				</div>
			</div>
			{/* <Light color={"fiolet"} style={{ top: "50px", left: "50px" }} />
			<Light color={"white"} style={{ top: "-50px", right: "-70px" }} /> */}
		</div>
	);
};

export default Count;
