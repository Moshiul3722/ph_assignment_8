import Image from "next/image";
import React from "react";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://ph-assignment-8-chi.vercel.app/data.json");
  const animals = await res.json();

  const animal = animals.find((ani) => ani.id == id);

  const {
    name,
    image,
    category,
    description,
    location,
    price,
    type,
    weight,
    age,
    breed,
  } = animal;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold my-5">Animal Details</h2>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="">
          <Image
            src={image}
            width={500}
            height={700}
            alt={name}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="text-2xl">Description: {description}</div>
          <div className="grid grid-cols-2 text-[18px]">
            <div>Waight: {weight} Kg</div>
            <div>Location: {location}</div>
            <div>Price: {price} BDT</div>
            <div>Type: {type}</div>
            <div>Age: {age} years</div>
            <div>Breed: {breed}</div>
            <div>Category: {category}</div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
