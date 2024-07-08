import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features, Objective } from "./components/objective";
import { AboutEnterprise } from "./components/about_enterprise";
import { AboutProduct } from "./components/about_product";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Target } from "./components/target";
import { DownloadApp } from "./components/download_app";
import { Footer } from "./components/footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <AboutEnterprise data={landingPageData.AboutCompany} />
      <AboutProduct data={landingPageData.AboutProduct} />
      <Objective data={landingPageData.Features} />
      <Target data={landingPageData.Target} />
      <DownloadApp />
      <Team data={landingPageData.Team} />
      <Footer />
    </div>
  );
};

export default App;
