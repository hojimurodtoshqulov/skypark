import scss from "./light.module.scss";

const Light = ({ color, style }) => {
	return <div className={scss.light + " " + scss[color]} style={style}></div>;
};

export default Light;
