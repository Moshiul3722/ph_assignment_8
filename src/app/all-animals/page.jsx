import AnimalsCard from "@/components/AnimalsCard";
import React from "react";

const AllAnimalsPage = async () => {
  const res = await fetch("https://ph-assignment-8-chi.vercel.app/data.json");
  const animals = await res.json();
  console.log(animals);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold">All Animals</h2>
      <div className="grid grid-cols-4 gap-5">
        {animals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
