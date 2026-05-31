import React from "react";
import AnimalsCard from "./AnimalsCard";

const AllAnimals = async () => {
  const res = await fetch("https://ph-assignment-8-chi.vercel.app/data.json");
  const animals = await res.json();
  const topAnimals = animals.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl text-red-300 font-bold my-5">
        Featured Animals
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {topAnimals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
