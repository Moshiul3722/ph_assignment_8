import AllAnimals from "@/components/AllAnimals";
import Banner from "@/components/Banner";
import QurbaniTipsAndTopBreeds from "@/components/QurbaniTipsAndTopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AllAnimals></AllAnimals>
      <QurbaniTipsAndTopBreeds></QurbaniTipsAndTopBreeds>
    </div>
  );
}
