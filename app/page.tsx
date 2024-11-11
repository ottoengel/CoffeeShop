import { Button } from "@/components/ui/button";
import Image from "next/image";
import Coffeeitem from "./_components/Coffee-item";

const Home = () => {
  return (
    <div>
      <div className="h-[250px] w-full bg-[#131313]">
        <div className="mx-9 pt-[160px]">
          <Image
            src="/banner-01.png"
            alt="Frete grátis"
            width={315}
            height={140}
          />
        </div>
        {/* TAGS */}
        <div className="mx-5 mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2 bg-[#C67C4E] rounded-xl">Cappuccino</Button>
          <Button className="gap-2 rounded-xl" variant="secondary">
            Machiato
          </Button>
          <Button className="gap-2 rounded-xl" variant="secondary">
            Latte
          </Button>
          <Button className="gap-2 rounded-xl" variant="secondary">
            Americano
          </Button>
        </div>
        {/* CAFES */}
        <div className="space-y-3 gap-5 pt-4 mx-3">
          <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
            <Coffeeitem />
            <Coffeeitem />
          </div>
          <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
            <Coffeeitem />
            <Coffeeitem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
