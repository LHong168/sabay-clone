import React from "react";
import FeatureCard from "../cards/feature-card";

const TopSection = () => {
  return (
    <section className="flex justify-between align-middle mb-10 md:space-x-3">
      <div className="md:w-3/4 md:grid md:grid-cols-7 flex flex-nowrap overflow-x-auto">
        <div className="md:col-span-4 flex-none w-fit">
          <FeatureCard></FeatureCard>
        </div>
        <div className="md:col-span-3 flex-none w-fit">
          <FeatureCard></FeatureCard>
        </div>
        <div className="md:col-span-4 flex-none w-fit">
          <FeatureCard></FeatureCard>
        </div>
        <div className="md:col-span-3 flex-none w-fit">
          <FeatureCard></FeatureCard>
        </div>
      </div>

      <div className="hidden md:block w-1/3 space-y-3">
        <img src="ads.png" alt="" />
        <img src="ads.png" alt="" />
      </div>
    </section>
  );
};

export default TopSection;
