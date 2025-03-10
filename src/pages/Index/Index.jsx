import React from "react";
import { Departments } from "./Departments";
import CombinedPage from "./News";
import OurTeam from "./OurTeam";
import GetConsultant from "./GetConsultant";
import Statistics from "./Statistics";
import Pricing from "./Pricing";
import AboutUs from "./AboutUs";
import Showcase from "./Showcase";

export const Index = () => {

  return <>
  <Showcase/>
  <AboutUs/>
  <Departments/>
  <OurTeam/>
  <Statistics/>
  {/* <Pricing/> */}
  <GetConsultant/>
  <CombinedPage/>
  </>;
};
