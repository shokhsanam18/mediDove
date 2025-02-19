import React from "react";
import { Departments } from "./Departments";
import CombinedPage from "./News";
import OurTeam from "./OurTeam";
import GetConsultant from "./GetConsultant";
import Statistics from "./Statistics";

export const Index = () => {

  return <>
  <Departments></Departments>
  <OurTeam/>
  <Statistics/>
  <GetConsultant/>
  <CombinedPage></CombinedPage>
  </>;
};
