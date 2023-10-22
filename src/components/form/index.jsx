import Button from "../Button";
import s from "./form.module.scss";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useTranslation } from "next-i18next";
const Form = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    closeModal();
  };
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className={s.form}
      onSubmit={handleSubmit}
    >
      <div className={s.heading}>
        <h3>Оставить заявку</h3>
        {/* {typeof closeModal === "function" && (
          <span onClick={closeModal}>
            <FaXmark />
          </span>
        )} */}
      </div>
      <input type="text" placeholder="Имя фамилия" name="name" required />
      <input
        type="text"
        placeholder="Номер телефона"
        name="phone__number"
        required
      />
      <Button variant={"secondary"} br={10}>
        Оставить заявку
      </Button>
    </form>
  );
};

export default Form;
