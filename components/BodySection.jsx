import React from "react";
import Card from "./Card";
import CareerPlan from "./CardsComponents/CareerPlan";
import CenturySkills from "./CardsComponents/CenturySkills";
import Consider from "./CardsComponents/Consider";
import Education from "./CardsComponents/Education";
import EntranceTest from "./CardsComponents/EntranceTest";
import Explore from "./CardsComponents/Explore";
import Virtual from "./CardsComponents/Virtual";
import Header from "./Header";

const BodySection = () => {
  return (
    <div className="p-10">
      <div >
        <Header/>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
      <CareerPlan/>
      <EntranceTest/>
      <CenturySkills/>
      <Consider/>
      <Education/>
      <EntranceTest/>
      <Explore/>
      <Virtual/>

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default BodySection;
