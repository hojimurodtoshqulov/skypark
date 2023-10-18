import Month from "@/components/month/month";
import AboutUs from "@/components/aboutUs/aboutUs";
import Principle from "@/components/Principle";
import ZoneShowcase from "@/components/zoneShowcase";
import Certificates from "@/components/certificates";

const About = () => {
  return (
    <>
      <div style={{ padding: "100px 0 200px" }}>
        <ZoneShowcase data={showcaseData} />
        <AboutUs />
        <Principle />
        <Month />
        <Certificates />
      </div>
    </>
  );
};

export default About;

const showcaseData = {
  title: "О нас",
  heading: "Крупнейшие аттракционы в городе",
  text: "Преврати свой день в незабываемое путешествие посетив наши аттракционы!",
};
