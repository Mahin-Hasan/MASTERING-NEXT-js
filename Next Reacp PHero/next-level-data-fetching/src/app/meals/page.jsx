import Meals from "@/components/Meals";
import React from "react";
import styles from './styles.module.css'
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
