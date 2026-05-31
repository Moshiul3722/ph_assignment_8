import Image from "next/image";
import React from "react";

const AnimalsCard = ({ animal }) => {
  console.log(animal);
  const { name, image, category, description, location, price, type, weight } =
    animal;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="relative w-full aspect-square">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-2 top-2 badge badge-soft badge-accent">
          {type}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalsCard;
{
}
