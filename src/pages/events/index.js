import React, { useState } from "react";
import Month from "@/components/month/month";
import AnimationSection from "@/components/animationSection/animationSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import EventShowcase from "@/components/eventShowcase";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Events = () => {
  const { t } = useTranslation();
  const [elementData, setElementData] = useState(null);

  const handleClick = (data) => {
    if (typeof window !== "undefined") {
      setElementData(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimationSection>
        <div style={{ padding: "100px 0 200px" }}>
          {elementData ? <EventShowcase data={elementData} /> : null}
          <Month handleClick={handleClick} />
        </div>
      </AnimationSection>
    </>
  );
};

export default Events;
