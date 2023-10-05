import s from "./zoneShowcase.module.scss";

const ZoneShowcase = ({ data }) => {
  console.log(data);
  return <div>This is {data?.title}</div>;
};

export default ZoneShowcase;
