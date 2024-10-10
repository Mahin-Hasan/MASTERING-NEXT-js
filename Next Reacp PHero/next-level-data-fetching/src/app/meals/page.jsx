import Meals from "@/components/Meals";
import React from "react";

const MealsPage = () => {
  return (
    <div className="p-10">
      <h1>Choose Your meal</h1>
      <p>Choose our favourite meal...</p>
      <Meals />
    </div>
  );
};

export default MealsPage;
