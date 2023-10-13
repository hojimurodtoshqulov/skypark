import React, { useEffect, useRef } from "react";

class TextScramble {
  constructor() {
    this.el = null;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setElement(el) {
    this.el = el;
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// const phrases = [
//   "Neo,",
//   "sooner or later",
//   "you're going to realize",
//   "just as I did",
//   "that there's a difference",
//   "between knowing the path",
//   "and walking the path",
// ];

const TextScrambleComponent = ({ phrases, timeout }) => {
  const textRef = useRef(null);
  const fx = useRef(new TextScramble());
  let counter = 0;

  useEffect(() => {
    fx.current.setElement(textRef.current);
    const next = () => {
      fx.current.setText(phrases[counter]).then(() => {
        setTimeout(next, timeout);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <div className="text" ref={textRef}>
      {phrases[0]}
    </div>
  );
};

export default TextScrambleComponent;
