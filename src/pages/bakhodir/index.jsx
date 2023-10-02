import Button from "@/components/Button";
import s from "./styles.module.scss";
import Principle from "@/components/Principle";
import CTA from "@/components/cta";
import Form from "@/components/form";
import FAQ from "@/components/faq";

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
        <Button variant="solid" br={10}>
          <p>Оставить заявку</p>
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
      <div style={{ marginTop: 50 }}>
        <Principle />
      </div>
      <div style={{ marginTop: 50 }}>
        <CTA />
      </div>
      {/* <Form closeModal={() => console.log("close")} /> */}
      <FAQ />
    </div>
  );
};

export default BakhodirComponents;
