import { useState } from "react";
import Button from "../Button";
import Form from "../form";
import Modal from "../modal";
import s from "./cta.module.scss";

const CTA = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={s.wrapper}>
				<video
					// controls
					src="/images/earth.mp4"
					poster="/images/cta-bg.png"
					autoPlay
					muted
					loop
				>
					<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
				</video>
				<div className="container">
					<h2>Оставьте заявку</h2>
					<p>
						Преврати свой день в незабываемое путешествие посетив наш
						аттракцион!
					</p>
					<div className={s.btn}>
						<Button
							variant={"secondary"}
							onClick={() => {
								setOpen(true);
								console.log("click");
							}}
							br={10}
						>
							Оставить заявку
						</Button>
					</div>
				</div>
			</div>
			<Modal open={open} setOpen={setOpen} s>
				<Form closeModal={() => setOpen(false)} />
			</Modal>
		</>
	);
};

export default CTA;
