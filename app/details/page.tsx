import { ChevronLeftIcon, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Detailspage = () => {
  return (
    <div className="space-y-3">
      {/* HEADER */}
      <div className="flex justify-between items-center mx-auto px-4 pt-4">
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
        <h1 className="text-2xl font-bold">Detalhes</h1>
        <Heart />
      </div>

      {/* IMAGEM */}
      <div className="px-[30px] pt-2">
        <Image
          src="/cappuccino.png"
          alt="Cappuccino"
          width={315}
          height={226}
        />
      </div>

      <div className="flex flex-col pl-6">
        <h1 className="text-lg font-semibold">Cappuccino</h1>
        <p className="text-sm text-gray-700 font-semibold">Com chocolate</p>
      </div>
    </div>
  );
};

export default Detailspage;
