"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(""); // State to hold error messages

  const loadMeal = async (search) => {
    try {
      setError(""); // Clear previous errors
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch meals");
      }

      const data = await res.json();
      
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError("No meals found. Try searching for something else.");
      }
    } catch (err) {
      console.error(err.message);
      setError("An error occurred while fetching meals. Please try again.");
    }
  };

  useEffect(() => {
    loadMeal(search);
  }, [search]);

  const handleSearchClick = () => {
    loadMeal(search);
  };

  return (
    <div className="mt-12">
      <input
        type="text"
        placeholder="Search Meal"
        className="text-blue-800 p-2 border-transparent"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearchClick} className="bg-blue-600 p-2 ms-2">
        Search
      </button>

      {/* Display error message if it exists */}
      {error && <div className="text-red-600 mt-4">{error}</div>}

      <div className="mt-12 grid grid-cols-3 gap-8">
        {meals?.map((meal) => (
          <div key={meal?.idMeal} className="border-2 p-2">
            <h2>{meal?.strMeal}</h2>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
