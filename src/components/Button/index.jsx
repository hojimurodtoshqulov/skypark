import s from "./Button.module.scss";

const Button = ({ variant, children, br }) => {
  return (
    <>
      <button style={{ borderRadius: br }} className={s.btn + " " + s[variant]}>
        {children}
      </button>
    </>
  );
};

export default Button;
