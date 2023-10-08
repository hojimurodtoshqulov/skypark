import CardZone from "../cardZone/cardZone";
import scss from "./attractions.module.scss";

const Attractions = ({ data }) => {
  return (
    <div className={scss.attractions}>
      <h2 className="container">Аттракционы</h2>
      <div className={scss.attractions_cards}>
        {data.map((item) => (
          <>
            <CardZone
              id={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
