import React, { useState } from "react";
import Month from "@/components/month/month";
import AnimationSection from "@/components/animationSection/animationSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Price = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimationSection>
        <div style={{ padding: "100px 0 200px" }}>
          <Month />
        </div>
      </AnimationSection>
    </>
  );
};

export default Price;
