import AnimationSection from "@/components/animationSection/animationSection";
import FAQ from "@/components/faq";
import Video from "@/components/video/video";
import ZoneAbout from "@/components/zoneAbout";
import ZoneCards from "@/components/zoneCards/zoneCards";
import ZoneCount from "@/components/zoneCount";
import ZoneShowcase from "@/components/zoneShowcase";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Zone3 = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = {
    showcase: {
      title: t("home.attractions.title3"),
      heading: t("atraction3.title"),
      text: t("atraction3.text"),
    },
    about: [
      {
        h2: t("atraction3.about.mainTitle1"),
        h4: t("atraction3.about.title1"),
        p: t("atraction3.about.text1"),
        image: ["/images/gameZone3.png", "/images/gameZone2.png"],
      },
      {
        h2: t("atraction3.about.mainTitle2"),
        h4: t("atraction3.about.title2"),
        p: t("atraction3.about.text2"),
        image: ["/images/gameZone3.png", "/images/gameZone2.png"],
      },
    ],
    rules: {
      heading: t("atraction3.rule.title"),
      details: [
        {
          number: "09:00",
          info: t("atraction3.rule.text1"),
        },
        {
          number: "113 м",
          info: t("atraction3.rule.text1"),
          sup: "2",
        },
        {
          number: "20:00",
          info: t("atraction3.rule.text3"),
        },
        {
          number: "5-15",
          info: t("atraction3.rule.text4"),
        },
        {
          number: "30 мин",
          info: t("atraction3.rule.text5"),
        },
        {
          number: "10",
          info: t("atraction3.rule.text6"),
        },
      ],
    },

    zoneCardsData: [
      {
        id: 1,
        img: "/images/gameZone1.png",
        title: t("home.attractions.title1"),
        text: t("home.attractions.text1"),
      },
      {
        id: 2,
        img: "/images/gameZone2.png",
        title: t("home.attractions.title2"),
        text: t("home.attractions.text2"),
      },
      // {
      //   id: 3,
      //   img: "/images/gameZone3.png",
      //   title: t("home.attractions.title3"),
      //   text: t("home.attractions.text3"),
      // },
    ],
    video: {
      src: "/images/earth.mp4",
      imgSrc: "/images/gameZone3.png",
    },
  };

  return isClient ? (
    <>
      <ZoneShowcase data={data?.showcase} />
      <Video height={100} src={data?.video?.src} imgSrc={data?.video?.imgSrc} />
      <ZoneAbout about={data?.about} />
      <AnimationSection>
        <ZoneCount rules={data?.rules} />
        <ZoneCards data={data?.zoneCardsData} />
        <FAQ />
      </AnimationSection>
    </>
  ) : null;
};

export default Zone3;
