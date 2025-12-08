import React, { useEffect } from "react";
import HeroSlider from "../components/homePageLayouts/heroSlider";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";
import WinterCareTips from "../components/homePageLayouts/WinterCareTips";
import MeetExpertVets from "../components/homePageLayouts/MeetExpertVets";
import WorkingHoursAndFeatures from "../components/homePageLayouts/WorkingHoursAndFeatures";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-2 md:my-10 px-4 md:px-6 lg:px-0">
        <section className="my-4 md:my-2 md:px-6">
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
