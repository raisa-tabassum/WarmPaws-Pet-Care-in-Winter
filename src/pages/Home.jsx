import React from "react";
import HeroSlider from "../components/homePageLayouts/heroSlider";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";
import WinterCareTips from "../components/homePageLayouts/WinterCareTips";
import MeetExpertVets from "../components/homePageLayouts/MeetExpertVets";
import WorkingHoursAndFeatures from "../components/homePageLayouts/WorkingHoursAndFeatures";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 px-4 md:px-6 lg:px-0">
        <section className="mx-8">
            <HeroSlider />
        </section>
        <section>
        <PopularWinterCareServices />
        </section>
        <section className="mx-8">
        <WinterCareTips />
        <MeetExpertVets />
        <WorkingHoursAndFeatures />
        </section>
    </div>
  );
};

export default Home;
