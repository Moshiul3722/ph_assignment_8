import Image from "next/image";
import React from "react";
import cow1 from "../assets/cow1.png";
import cow2 from "../assets/cow2.png";

const QurbaniTipsAndTopBreeds = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center">
        Qurbani Tips and Top Breeds
      </h2>
      <h2 className="text-2xl font-bold mb-4">Qurbani Tips</h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="card card-border w-full bg-white text-slate-700">
          <div className="card-body">
            <h2 className="card-title">Buy from a trusted source</h2>
            <ul>
              <li>Choose animals from reputable farms or verified sellers.</li>
              <li>Check vaccination and health records if available.</li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-border bg-white text-slate-700 w-full">
          <div className="card-body">
            <h2 className="card-title">Ensure the animal is healthy</h2>
            <ul>
              <li>Eyes should be bright and clear.</li>
              <li>
                The animal should be active and free from visible injuries or
                diseases.
              </li>
              <li>Avoid animals that are excessively weak or underweight.</li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-border bg-white text-slate-700 w-full">
          <div className="card-body">
            <h2 className="card-title">Check the age requirement bg</h2>
            <ul>
              <li>
                Cows and buffaloes should generally be at least 2 years old.
              </li>
              <li>
                Goats and sheep should generally be at least 1 year old (subject
                to local Islamic rulings and regulations).
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-border bg-white text-slate-700 w-full">
          <div className="card-body">
            <h2 className="card-title">Inspect weight and body condition</h2>
            <ul>
              <li>
                A well-built animal with good muscle development usually
                provides better meat yield.
              </li>
              <li>
                Avoid selecting solely based on size; overall health is more
                important.
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-border bg-white text-slate-700 w-full">
          <div className="card-body">
            <h2 className="card-title">Provide proper care before Qurbani</h2>
            <ul>
              <li>Ensure clean water and nutritious feed.</li>
              <li>Keep the animal in a clean and comfortable environment.</li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-border bg-white text-slate-700 w-full">
          <div className="card-body">
            <h2 className="card-title">Follow Islamic guidelines</h2>
            <ul>
              <li>
                Make sure the animal meets all Shariah requirements for Qurbani.
              </li>
              <li>
                Perform the sacrifice humanely and according to Islamic
                principles.
              </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div>
        <h2>Top Cow Breeds for Qurbani</h2>
        1. Red Chittagong Cattle Native breed of Bangladesh. Known for good meat
        quality and adaptability. Popular choice during Eid-ul-Adha. 2. Sahiwal
        Strong and healthy breed. Excellent body size and meat production.
        Widely raised in South Asia. 3. Holstein Friesian Large body frame.
        Often crossed with local breeds for better growth. Popular in commercial
        farms. 4. Local Deshi Naturally raised and well adapted to local
        conditions. Preferred by many families for traditional Qurbani.
        <h2>Top Goat Breeds for Qurbani</h2>
        1. Black Bengal Bangladeshs most famous goat breed. Excellent meat
        quality. High demand during Qurbani season. 2. Jamunapari Large-sized
        breed. Attractive appearance and higher meat yield. 3. Boer Premium meat
        breed. Fast growth and heavy body weight. Top Sheep Breeds for Qurbani
        1. Garole Compact and healthy sheep breed. Good meat quality. 2. Deshi
        Sheep Easy to maintain. Suitable for small families.
      </div>
    </div>
  );
};

export default QurbaniTipsAndTopBreeds;
