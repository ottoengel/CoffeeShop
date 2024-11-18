import { Button } from "@/components/ui/button";
import Image from "next/image";
import Coffeeitem from "./_components/Coffee-item";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="h-[250px] w-full bg-[#131313]">
        {/* login */}
        <div className="flex justify-end pt-3 pr-3">
          <Link href="/login">
            <button className="text-white font-bold bg-amber-900 rounded-2xl p-2 ">
              Login
            </button>
          </Link>
        </div>
        {/* responsiveness */}
        <div className="lg:hidden">
          <div className="mx-9 pt-[160px]">
            <Image
              src="/banner-01.png"
              alt="Frete grátis"
              width={315}
              height={140}
            />
          </div>
        </div>
        {/* TAGS */}
        <div className="lg:pt-[200px] lg:items-center lg:">
          <div className="mx-5 mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            <Button className="gap-2 bg-[#C67C4E] rounded-xl">
              Cappuccino
            </Button>
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
        </div>
        {/* CAFES */}
        <div className="lg:flex-row">
          <div className="space-y-3 gap-5 pt-4 mx-3 lg:flex-row">
            <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
            </div>
            <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
              <Coffeeitem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
