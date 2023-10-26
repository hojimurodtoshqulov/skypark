import { useState, useRef } from "react";

const Headline = ({ text }) => {
	const letters = '!@#$%^&*()_+-={}|[]:";<>?,.';
	const [headlineText, setHeadlineText] = useState(text);

	const handleMouseOver = () => {
		let iteration = 0;
		let requestId = null;
		const { length } = headlineText;

		const scrambleText = () => {
			setHeadlineText((prevText) => {
				const scrambledText = prevText
					.split("")
					.map((letter, index) => {
						if (index < iteration) {
							return text[index];
						}
						return letters[Math.floor(Math.random() * length)];
					})
					.join("");
				iteration += 1 / 3;

				if (iteration >= length) {
					setHeadlineText(text);
					cancelAnimationFrame(requestId);
				}

				return scrambledText;
			});
			requestId = requestAnimationFrame(scrambleText);
		};

		requestId = requestAnimationFrame(scrambleText);
	};

	return <h2 onMouseOver={handleMouseOver}>{headlineText}</h2>;
};
export default Headline;
// const phrases = [
// 	"Neo,",
// 	"sooner or later",
// 	"you're going to realize",
// 	"just as I did",
// 	"that there's a difference",
// 	"between knowing the path",
// 	"and walking the path",
// ];

// const el = document.querySelector(".text");
// const fx = new TextScramble(el);

// let counter = 0;
// const next = () => {
// 	fx.setText(phrases[counter]).then(() => {
// 		setTimeout(next, 800);
// 	});
// 	counter = (counter + 1) % phrases.length;
// };

// next();

// const TextScramble = ({ el }) => {
// 	this.el = el;
// 	this.chars = "!<>-_\\/[]{}—=+*^?#________";
// 	this.update = this.update.bind(this);

// 	const setText = (newText) => {
// 		const oldText = this.el.innerText;
// 		const length = Math.max(oldText.length, newText.length);
// 		const promise = new Promise((resolve) => (this.resolve = resolve));
// 		this.queue = [];
// 		for (let i = 0; i < length; i++) {
// 			const from = oldText[i] || "";
// 			const to = newText[i] || "";
// 			const start = Math.floor(Math.random() * 40);
// 			const end = start + Math.floor(Math.random() * 40);
// 			this.queue.push({ from, to, start, end });
// 		}
// 		cancelAnimationFrame(this.frameRequest);
// 		this.frame = 0;
// 		this.update();
// 		return promise;
// 	};
// 	const update = () => {
// 		let output = "";
// 		let complete = 0;
// 		for (let i = 0, n = this.queue.length; i < n; i++) {
// 			let { from, to, start, end, char } = this.queue[i];
// 			if (this.frame >= end) {
// 				complete++;
// 				output += to;
// 			} else if (this.frame >= start) {
// 				if (!char || Math.random() < 0.28) {
// 					char = this.randomChar();
// 					this.queue[i].char = char;
// 				}
// 				output += `<span class="dud">${char}</span>`;
// 			} else {
// 				output += from;
// 			}
// 		}
// 		this.el.innerHTML = output;
// 		if (complete === this.queue.length) {
// 			this.resolve();
// 		} else {
// 			this.frameRequest = requestAnimationFrame(this.update);
// 			this.frame++;
// 		}
// 	};
// 	const randomChar = () => {
// 		return this.chars[Math.floor(Math.random() * this.chars.length)];
// 	};
// };
// export default TextScramble
// // const TextScramble = dynamic(import("@twistezo/react-text-scramble"), {
// // 	ssr: false,
// // });
// // // const { ScrambleTexts } = dynamic(import("@twistezo/react-text-scramble"), {
// // // 	ssr: false,
// // // });
// // import React, { useState } from "react";
// // // import TextScramble, { ScrambleTexts } from "@twistezo/react-text-scramble";
// // import dynamic from "next/dynamic";

// // const ScrambleTexts = [
// // 	"Преврати свой день в незабываемое путешествие посетив наши аттракционы!",
// // ];

// // const Example = () => {
// // 	const [pause, setPause] = useState(false);

// // 	return (
// // 		<>
// // 			<div className="Example">
// // 				<TextScramble
// // 					texts={ScrambleTexts}
// // 					letterSpeed={10}
// // 					nextLetterSpeed={200}
// // 					pauseTime={50}
// // 					// paused={false}
// // 				/>
// // 			</div>
// // 		</>
// // 	);
// // };

// // export default Example;
