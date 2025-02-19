import React from "react";
import { Departments } from "./Departments";
import CombinedPage from "./News";
import OurTeam from "./OurTeam";
import GetConsultant from "./GetConsultant";

export const Index = () => {

  return <>
  <Departments></Departments>
  <OurTeam/>
  <GetConsultant/>
  <CombinedPage></CombinedPage>
  </>;
};
