import Image from "next/image";
import Button from "../Button";
import s from "./certificates.module.scss";

const Certificates = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2>Сертификаты</h2>
        <div className={s.grid}>
          {cerfs.map((i) => (
            <Button key={i} variant={"primaryBIG"} br={20}>
              <span></span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

const cerfs = [1, 2, 3];
