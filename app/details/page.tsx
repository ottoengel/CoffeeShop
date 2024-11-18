import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

      <div className="pl-6 flex flex-col space-y-2 pt-6">
        <h1 className="text-lg font-bold">Descrição</h1>
        <p>
          Ícone da cafeteria italiana no mundo, elaborado à base de café, leite,
          cacau e canela. Sabor, textura aveludada e cremosidade são as{" "}
          <span className="text-[#C67C4E] font-bold">... Ler Mais</span>
        </p>

        {/* tamanho */}
        <div>
          <h1 className="text-lg font-bold mt-6">Tamanho</h1>
        </div>
        <div>
          <div className="mx-5 mt-6 flex gap-3">
            <Button variant="outline" className="w-[96px] h-[43px]">
              P
            </Button>
            <Button className="gap-2 bg-[#C67C4E] rounded-xl w-[96px] h-[43px]">
              M
            </Button>
            <Button variant="outline" className="w-[96px] h-[43px]">
              G
            </Button>
          </div>
        </div>
      </div>
      <footer>
        {/* Go to checkout */}
        <div className="w-full pt-4 p-0 justify-center items-center">
          <Card className=" h-[121px] rounded-lg ">
            <div className="flex justify-between">
              {/* esquerda */}
              <div className="mx-5 pt-4">
                <h3 className="text-sm text-gray-700">Preço</h3>
                <p className="text-lg text-[#C67C4E]">R$ 12,50</p>
              </div>
              {/* direita */}
              <div className="items-center pr-7 pt-3">
                <Link href="/checkout">
                  <Button className="bg-[#C67C4E] text-2xl rounded-lg w-[217px] h-[62px]">
                    Comprar
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </footer>
    </div>
  );
};

export default Detailspage;
