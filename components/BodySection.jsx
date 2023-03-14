import React from "react";
import Card from "./Card";
import Header from "./Header";
import ViewSection from "./ViewSection";

const BodySection = () => {
  return (
    <div className="p-10">
      <div >
        <Header/>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
      <ViewSection/>
      {/* </div> */}
    </div>
  );
};

export default BodySection;
