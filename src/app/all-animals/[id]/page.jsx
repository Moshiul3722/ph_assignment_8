import React from "react";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto">
      <h2>Animal Details</h2>
    </div>
  );
};

export default AnimalDetailsPage;
