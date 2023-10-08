import Link from "next/link";
import scss from "./cardZone.module.scss";
import Image from "next/image";
const CardZone = ({ img, title, text, id }) => {
  return (
    <Link href={"/zone/" + id}>
      <div className={scss.card}>
        <div>
          <Image
            layout="responsive"
            src={img}
            width={580}
            height={354}
            alt={img}
            loading="lazy"
          />
        </div>

        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default CardZone;
