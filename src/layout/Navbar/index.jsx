import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/images/Sky-Park-LOGO2.png";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import CardZone from "@/components/cardZone/cardZone";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const drop = useRef(null);
  const route = useRouter();
  const isHome =
    route.pathname === "/" || route.pathname.startsWith("/products");

  // changeColor();

  useEffect(() => {
    const changeColor = () => {
      if (!ref.current) return;
      if (window.pageYOffset === 0) {
        ref.current.style.setProperty("--color", isHome ? "white" : "grey");
        ref.current.style.backdropFilter = `blur(${0}px)`;
        // ref.current.style.borderBottom = "0px solid #BBE4EA";
        ref.current.style.background = "#5a15a6";
      } else {
        ref.current.style.setProperty("--color", "white");
        ref.current.style.backdropFilter = `blur(${5}px)`;
        // ref.current.style.borderBottom = "1px solid #BBE4EA";
        ref.current.style.background = "#5b15a6a9 ";
      }
    };
    const handleScroll = () => {
      changeColor();
      if (!ref.current) return;
      const currentScrollPos = window.pageYOffset;
      ref.current.style.translate =
        scrollPosition < currentScrollPos && currentScrollPos > 100
          ? "0 -100%"
          : "0";
      setScrollPosition(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const enter = () => {
    if (drop.current) {
      drop.current.style.display = "block";
    }
  };

  const leave = () => {
    if (drop.current) {
      drop.current.style.display = "none";
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} container`} ref={ref}>
        <Link href="/" className={`${styles.navbar_logo}`}>
          <Image src={logo.src} alt={logo.src} width={200} height={20} />
        </Link>
        <div className={`${styles.navbar_linksDiv}`}>
          <a
            style={{ cursor: "pointer" }}
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            Аттракционы
          </a>
          <Link href="/">Мероприятия</Link>
          <Link href="/">О парке</Link>
          <Link href="/">Контакты</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      <div
        ref={drop}
        className={styles.dropdown}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={() => {
          enter();
          leave();
        }}
      >
        <DropDown />
      </div>
    </>
  );
}

export default Navbar;

const attractionsData = [
  {
    img: "/images/gameZone1.png",
    title: "Зона 1",
    text: "Детский научный комплекс (ДНК)",
  },
  { img: "/images/gameZone2.png", title: "Зона 2", text: "VR - зона" },
  { img: "/images/gameZone3.png", title: "Зона 3", text: "Activity zone" },
];

const DropDown = () => {
  return (
    <>
      <div className="container">
        <div className={styles.cards__container}>
          {attractionsData.map((item, idx) => (
            <Link href={"/"} key={idx}>
              <CardZone img={item.img} title={item.title} text={item.text} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
