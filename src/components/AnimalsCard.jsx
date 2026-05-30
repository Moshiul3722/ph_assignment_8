import Image from "next/image";
import React from "react";

const AnimalsCard = ({ animal }) => {
  console.log(animal);
  const { name, image, category, description, location, price, type, weight } =
    animal;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <Image src={image} height={200} width={200} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
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
