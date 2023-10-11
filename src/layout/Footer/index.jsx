import Link from "next/link";
import s from "./footer.module.scss";
import logo from "../../../public/images/Sky-Park-LOGO 1.svg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.top}>
          <div className={s.left}>
            <h3>Как добраться</h3>
            <p>
              Узбекистан, г. Ташкент,
              <span>Tashkent City Mall, ул. Олмазор 2A</span>
            </p>
          </div>
          <div className={s.right}>
            <h3>График работы</h3>
            <p>Ежедневно с 10:00 до 20:00 </p>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <Link className={s.logo} href={"/"}>
              <Image
                width={414}
                height={40}
                src={logo.src}
                alt={logo.src}
                layout="responsive"
              />
            </Link>
            <div className={s.social}>
              <a href="https://instagram.com/skypark.tashkent?igshid=MzRlODBiNWFlZA==" target="_blank">
                <BsInstagram />
              </a>
              <a href="https://t.me/skyparktashkent" target="_blank">
                <FaTelegramPlane />
              </a>
            </div>
            <p>Copyright © 2021. All rights reserved</p>
          </div>
          <div className={s.right}>
            <div>
              <Link href={"/"}>О парке</Link>
              <Link href={"/zone/1"}>ДНК - зона</Link>
              <Link href={"/zone/2"}>VR - зона</Link>
              <Link href={"/zone/3"}>Activity зона</Link>
            </div>
            <div>
              <Link href={"/"}>Сертификаты</Link>
              <Link href={"/"}>Преимущества</Link>
              <Link href={"/"}>Мероприятие</Link>
              <Link href={"/"}>Контакты</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
