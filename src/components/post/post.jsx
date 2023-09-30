import Button from "../Button";
import scss from "./post.module.scss";

const Post = () => {
	return (
		<div className={`${scss.post} container`}>
			<div className={scss.post_videoBG}>
				<video
					// controls
					src="/images/earth.mp4"
					// poster="/images/Sky Park 1.png"
					autoPlay
					muted
					loop
				>
					<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				</video>
			</div>
			<div className={scss.bgColor}></div>
			<div className={`${scss.post_elements}`}>
				<h2>Оставьте заявку</h2>
				<p>
					Преврати свой день в незабываемое путешествие посетив наш аттракцион!
				</p>
				<Button variant="secondary" br={10}>
					Оставить заявку
				</Button>
			</div>
		</div>
	);
};

export default Post;
