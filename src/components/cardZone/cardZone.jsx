import Link from "next/link";
import scss from "./cardZone.module.scss";
import Image from "next/image";
import Button from "../Button";
const CardZone = ({ img, title, text, id, withBorder }) => {
  return (
    <Link href={"/zone/" + id}>
      <div className={scss.card}>
        <div className={`${scss.none_border} ${withBorder ? scss.hide : ""}`}>
          <Image
            layout="responsive"
            src={img}
            width={580}
            height={354}
            alt={img}
            loading="lazy"
          />
        </div>

        <div className={`${scss.with_border} ${withBorder ? scss.show : ""}`}>
          <Button variant={"primaryBig"} br={20}>
            <Image
              layout="responsive"
              src={img}
              width={580}
              height={354}
              alt={img}
              loading="lazy"
            />
          </Button>
        </div>

        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default CardZone;
