import Meals from "@/components/Meals";
import React from "react";
import styles from "./styles.module.css";
export const metadata = {
  title: {
    absolute:"Meals"
  },
  description: "Text generated from layout",
};
const MealsPage = () => {
  return (
    <div className="p-10">
      <h1 className={styles.headingStyle}>Choose Your meal</h1>
      <p>Choose our favourite meal...</p>
      <Meals />
    </div>
  );
};

export default MealsPage;
