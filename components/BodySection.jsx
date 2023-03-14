import React from "react";
import Card from "./Card";
import Header from "./Header";

const BodySection = () => {
  return (
    <div className="p-10">
      <div className="">
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
    </div>
  );
};

export default BodySection;
