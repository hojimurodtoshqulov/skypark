import AnimationSection from "@/components/animationSection/animationSection";
import CardZone from "@/components/cardZone/cardZone";
import FAQ from "@/components/faq";
import Video from "@/components/video/video";
import ZoneAbout from "@/components/zoneAbout";
import ZoneCards from "@/components/zoneCards/zoneCards";
import ZoneCount from "@/components/zoneCount";
import ZoneShowcase from "@/components/zoneShowcase";

const ZoneId = ({ data }) => {
  return (
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
  );
};

export default ZoneId;

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: true,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const validIds = ["1", "2", "3"];

  if (!validIds.includes(params.id)) {
    // Handle the case where `id` is not within the expected range
    return {
      notFound: true, // Return a 404 response
    };
  }
  const attractionsData = [
    {
      id: 1,
      img: "/images/gameZone1.png",
      title: "Зона 1",
      text: "Детский научный комплекс (ДНК)",
    },
    { id: 2, img: "/images/gameZone2.png", title: "Зона 2", text: "VR - зона" },
    {
      id: 3,
      img: "/images/gameZone3.png",
      title: "Зона 3",
      text: "Activity zone",
    },
  ];
  function zoneData(zoneId) {
    switch (zoneId) {
      case 1:
        return {
          showcase: {
            title: "Зона 1",
            heading: "Детский научный комплекс (ДНК)",
            text: "Здесь обучение переплетается с развлечением. На площади в 113 квадратных метров мы разместили четыре захватывающих пространства, где можно получить знания в области астрономии и химии.",
          },
          about: [
            {
              h2: "Ознакомление с космосом",
              h4: "Познавательная экскурсия в космос",
              p: "Отправьтесь в захватывающее путешествие по безграничным просторам Вселенной",
              image: ["/images/gameZone1.png", "/images/gameZone2.png"],
            },
            {
              h2: "Солнечная система ",
              h4: "Исследование планет Солнечной системы",
              p: "Познакомьтесь с тайнами и загадками планетологии",
              image: ["/images/gameZone1.png", "/images/gameZone2.png"],
            },
            {
              h2: "Крио-магия ",
              h4: "Лаборатория Крио-шоу",
              p: "Зрелищные  эксперименты с жидким азотом, где каждый маленький учёный сможет попробовать свои силы в химии под руководством наших специалистов",
              image: ["/images/gameZone1.png", "/images/gameZone2.png"],
            },
            {
              h2: "Космос и человек ",
              h4: "Погружение в повседневную жизнь космонавтов",
              p: "Узнайте, как проходит день героев космоса",
              image: ["/images/gameZone1.png", "/images/gameZone2.png"],
            },
          ],
          rules: {
            heading: "Правила",
            details: [
              {
                number: "09:00",
                info: "Время открытия",
              },
              {
                number: "113 м",
                info: "Протяженность маршрута",
                sup: "2",
              },
              {
                number: "20:00",
                info: "Время закрытия",
              },
              {
                number: "5-15",
                info: "Возрастое ограничение",
              },
              {
                number: "30 мин",
                info: "Длительность",
              },
              {
                number: "10",
                info: "Инструкторы",
              },
            ],
          },
          attractions: attractionsData.filter((item) => item.id !== zoneId),
          zoneCardsData: [
            {
              id: 2,
              img: "/images/gameZone2.png",
              title: "Зона 2",
              text: "VR - зона",
            },
            {
              id: 3,
              img: "/images/gameZone3.png",
              title: "Зона 3",
              text: "Activity zone",
            },
          ],
          video: {
            src: "/images/earth.mp4",
            imgSrc: "/images/gameZone1.png",
          },
        };

      case 2:
        return {
          showcase: {
            title: "Зона 2",
            heading: "VR-пространство",
            text: "Здесь адреналин и виртуальная реальность становятся единым целым.",
          },
          about: [
            {
              h2: "Погружение 360° с Hurricane ",
              h4: "Аттракцион Hurricane 360",
              p: "Иммерсивное погружение в мир 360-градусного адреналина, где виртуальная реальность и динамика движения сочетаются в захватывающем волнении",
              image: [
                "/images/zone2(1).jpg",
                "/images/zone2(2).jpg",
                "/images/zone2(3).jpg",
              ],
            },
            {
              h2: "Погружение 360° с Riot",
              h4: "Аттракцион Riot 360",
              p: "Удивительный аттракцион, который одновременно вращается на 360 градусов и может разместить до 8 гостей",
              image: [
                "/images/zone2(4).jpg",
                "/images/zone2(5).jpg",
                "/images/zone2(6).jpg",
              ],
            },
          ],
          rules: {
            heading: "Правила",
            details: [
              {
                number: "09:00",
                info: "Время открытия",
              },
              {
                number: "113 м",
                info: "Протяженность маршрута",
                sup: "2",
              },
              {
                number: "20:00",
                info: "Время закрытия",
              },
              {
                number: "5-15",
                info: "Возрастое ограничение",
              },
              {
                number: "30 мин",
                info: "Длительность",
              },
              {
                number: "10",
                info: "Инструкторы",
              },
            ],
          },
          attractions: attractionsData.filter((item) => item.id !== zoneId),
          zoneCardsData: [
            {
              id: 1,
              img: "/images/gameZone1.png",
              title: "Зона 1",
              text: "Детский научный комплекс (ДНК)",
            },
            // {
            // 	id: 2,
            // 	img: "/images/gameZone2.png",
            // 	title: "Зона 2",
            // 	text: "VR - зона",
            // },
            {
              id: 3,
              img: "/images/gameZone3.png",
              title: "Зона 3",
              text: "Activity zone",
            },
          ],
          video: {
            src: "/images/earth.mp4",
            imgSrc: "/images/gameZone2.png",
          },
        };

      case 3:
        return {
          showcase: {
            title: "Зона 3",
            heading: "Activity zone",
            text: "Двухэтажное пространство для развлечений детей всех возрастов!",
          },
          about: [
            {
              h2: "Малышландия",
              h4: "Этаж 1",
              p: "Специально для малышей от 2 до 5 лет мы продумали активности, где они могут насладиться рыбалкой, поиграть с кинетическим песком или в бассейне с шариками, покататься на аттракционах, пройти 15-метровый лабиринт и ещё много интересного и познавательного",
              image: ["/images/gameZone3.png", "/images/gameZone2.png"],
            },
            {
              h2: "Остров смелых",
              h4: "Этаж 2",
              p: "Спроектированная экстрим-зона не оставит равнодушными детей старше 6 лет. Скалодром, мини-тарзанка, воздушная 15-метровая качеля, огромный батут, горки различной высоты и длины, зиплайн, игротека, зона творчества: С нами можно провести весь день и захотеть прийти уже на следующий!",
              image: ["/images/gameZone3.png", "/images/gameZone2.png"],
            },
          ],
          rules: {
            heading: "Правила",
            details: [
              {
                number: "09:00",
                info: "Время открытия",
              },
              {
                number: "113 м",
                info: "Протяженность маршрута",
                sup: "2",
              },
              {
                number: "20:00",
                info: "Время закрытия",
              },
              {
                number: "5-15",
                info: "Возрастое ограничение",
              },
              {
                number: "30 мин",
                info: "Длительность",
              },
              {
                number: "10",
                info: "Инструкторы",
              },
            ],
          },
          attractions: attractionsData.filter((item) => item.id !== zoneId),
          zoneCardsData: [
            {
              id: 1,
              img: "/images/gameZone1.png",
              title: "Зона 1",
              text: "Детский научный комплекс (ДНК)",
            },
            {
              id: 2,
              img: "/images/gameZone2.png",
              title: "Зона 2",
              text: "VR - зона",
            },
            // {
            // 	id: 3,
            // 	img: "/images/gameZone3.png",
            // 	title: "Зона 3",
            // 	text: "Activity zone",
            // },
          ],
          video: {
            src: "/images/earth.mp4",
            imgSrc: "/images/gameZone3.png",
          },
        };

      default:
        return null;
    }
  }
  const data = zoneData(Number(params.id));
  return {
    props: {
      data: data,
    },
  };
}
