import Button from "@/components/Button";
import s from "./styles.module.scss";

const BakhodirComponents = () => {
  return (
    <div className={s.container}>
      <div className={s.btn__wrap}>
        <Button variant="secondary" br={10}>
          <p>Оставить заявку</p>
        </Button>
        <Button variant="primary" br={10}>
          <p>Смотреть видео</p>
        </Button>
      </div>
      <div className={s.big__btn__wrap}>
        <Button variant="primary" br={20}>
          <div className={s.btn__content}>
            <h2>60м</h2>
            <p>Горка протяженностью 60м</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BakhodirComponents;
