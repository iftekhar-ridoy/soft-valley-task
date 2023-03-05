import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Contact from "../../Shared/Contact/Contact";
import Faq from "../../Shared/Faq/Faq";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Video from "../../Shared/Video/Video";
import BannerAbout from "../BannerAbout/BannerAbout";
import Blank from "../Blank";
import ItSolution from "../ItSolution/ItSolution";
import OurStory from "../OurStory/OurStory";
import SoftValleyTeam from "../SoftValleyTeam/SoftValleyTeam";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BannerAbout></BannerAbout>
      <OurStory></OurStory>
      <ItSolution></ItSolution>
      <SoftValleyTeam></SoftValleyTeam>
      <Video></Video>
      <Blank></Blank>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>

      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default About;
