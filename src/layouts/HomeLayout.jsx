import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/homePageLayouts/heroSlider";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <section className="relative">
          {/* Navbar */}
          <div className="absolute top-0 left-0 w-full z-2">
            <nav className="w-11/12 mx-auto mt-4">
              <Navbar></Navbar>
            </nav>
          </div>
          {/* Slider */}
          <section>
            <HeroSlider></HeroSlider>
          </section>
        </section>
      </header>
      {/* Other page content */}
      <main>
        <section className="w-11/12 mx-auto">
          <PopularWinterCareServices></PopularWinterCareServices>
        </section>
      </main>
      <footer className="bottom-0 left-0 w-full z-50">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
