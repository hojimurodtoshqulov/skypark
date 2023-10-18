import Button from "../Button";
import s from "./times.module.scss";

const Times = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <Button variant="primaryBIG" br={20}>
          <h3>Время открытия</h3>
          <h2>10:00</h2>
        </Button>
        <span></span>
        <Button variant="primaryBIG" br={20}>
          <h3>Время закрытия</h3>
          <h2>23:00</h2>
        </Button>
      </div>
    </div>
  );
};

export default Times;
