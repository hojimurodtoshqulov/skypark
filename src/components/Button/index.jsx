import s from "./Button.module.scss";

const Button = ({ variant, children, br, ...props }) => {
  return (
    <>
      <button
        style={{ borderRadius: br }}
        {...props}
        className={s.btn + " " + s[variant]}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
