import s from "./zoneShowcase.module.scss";

const ZoneShowcase = ({ data }) => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.mini__container}>
          <h3>{data?.title}</h3>
          <h2>{data?.heading}</h2>
          <p>{data?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ZoneShowcase;
