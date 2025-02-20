import React from "react";
import { Departments } from "./Departments";
import CombinedPage from "./News";
import OurTeam from "./OurTeam";
import GetConsultant from "./GetConsultant";
import Statistics from "./Statistics";
import Pricing from "./Pricing";

export const Index = () => {

  return <>
  <Departments/>
  <OurTeam/>
  <Statistics/>
  <Pricing/>
  <GetConsultant/>
  <CombinedPage/>
  </>;
};
