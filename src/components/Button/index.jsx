import s from "./Button.module.scss";

const Button = ({ variant, children, br, ...props }) => {
  return (
    <>
      <button
        style={{ borderRadius: br }}
        {...props}
        className={s.btn + " " + s[variant]}
      >
        <div className={s.line}>{children}</div>
      </button>
    </>
  );
};

export default Button;
