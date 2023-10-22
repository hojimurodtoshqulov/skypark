import { FaArrowRight, FaInstagram } from "react-icons/fa6";
import s from "./social.module.scss";
import { useTranslation } from "next-i18next";
const Social = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.container}>
          <div>
            <h2>Соц-сети</h2>
          </div>
          <div>
            <div className={s.links}>
              {links.map((l, i) => (
                <a href={l.link} target="_blank" key={i} className={s.link}>
                  <div>
                    <span>{l.icon}</span>
                    <h3>{l.label}</h3>
                  </div>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;

const links = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com",
  },
];
