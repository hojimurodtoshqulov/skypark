import Button from "../Button";
import scss from "./showcase.module.scss";

const Showcase = () => {
	return (
		<div className={scss.showcase}>
			<div className={scss.showcase_bgVideo}>
				<video
					// controls
					src="/images/Sky Park.mp4"
					// poster="/images/Sky Park 1.png"
					autoPlay
					muted
					loop
				>
					<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				</video>
				<div></div>
			</div>
			<div className={`${scss.showcase_elements} container`}>
				<h1>Крупнейшие аттракцион в городе</h1>
				<p>
					Преврати свой день в незабываемое путешествие посетив наши
					аттракционы!
				</p>
				<div className={scss.showcase_elements_buttons}>
					<Button variant="secondary" br={10}>
						Оставить заявку
					</Button>
					<Button variant="primary" br={10}>
						Смотреть видео
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
