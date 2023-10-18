import React from "react";
import Month from "@/components/month/month";
import AnimationSection from "@/components/animationSection/animationSection";
import ZoneShowcase from "@/components/zoneShowcase";
import Social from "@/components/social";
import Times from "@/components/times";

const Contact = () => {
  return (
    <>
      <ZoneShowcase data={contactShowcase} />

      <Social />
      <Times />
    </>
  );
};

export default Contact;

const contactShowcase = {
  title: "Контакты",
  heading: "+998 90 788 66 61",
  text: "Наши сотрудники ответят на все ваши вопросы",
};
