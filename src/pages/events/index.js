import React from "react";
import Month from "@/components/month/month";
import AnimationSection from "@/components/animationSection/animationSection";

const Events = () => {
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

export default Events;
