import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, NotepadText, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <div className="space-y-3">
      <div className="flex  items-center mx-auto px-4 pt-4">
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
        <h1 className="pl-[30%] text-2xl font-bold">Pedido</h1>
      </div>
      {/* Endereço */}
      <div className="flex flex-col items-start pt-12 pl-6 pb-4">
        <h2 className="font-bold text-lg">Endereço de Entrega</h2>
        <h3 className="font-semibold pt-3">
          Universidade Positivo - Praça Osório
        </h3>
        <p className="text-sm">
          Praça Gen. Osório, 125 - 3 - Centro, Curitiba - PR, 80020-010
        </p>

        {/* edit and notes*/}
        <div className="flex-row gap-3 pt-4 justify-between space-x-4">
          <Button className="w-[139px] h-[27px] rounded-full" variant="outline">
            <Pencil />
            Editar Endereço
          </Button>
          <Button
            className="w-[160px] h-[27px] rounded-full gap-2"
            variant="outline"
          >
            <NotepadText size={14} />
            Adicionar Anotação
          </Button>
        </div>
      </div>
      {/* summary */}
      <div className="w-[315px] h-[54px] flex mx-auto gap-3 mt-6 ">
        <Image src="/cappuccino.png" alt="coffe" width={54} height={54} />
        <div>
          <p className="text-lg">Cappuccino</p>
          <p className="text-sm text-gray-600">Com Chocolate</p>
        </div>
        <div>
          <Button className="rounded-full text-sm" variant="ghost">
            +
          </Button>
          <Button className="text-sm" variant="ghost">
            1
          </Button>
          <Button className="rounded-full text-sm" variant="ghost">
            -
          </Button>
        </div>
      </div>
      {/* Cart Summary */}
      <div className="space-x-4  pt-7 mb-3 border-1 border-solid pb-40">
        <h1 className="text-lg pl-6">Resumo do Pagamento</h1>
        <div className="px-8 pt-3">
          <div className="flex flex-row justify-between">
            <h3>Preço</h3>
            <p className="font-semibold">R$ 12,50</p>
          </div>
          <div className="flex flex-row justify-between">
            <h3>Taxa de Entrega</h3>
            <p className="font-semibold">R$ 15,00</p>
          </div>
          {/* toootal */}
          <div className="flex flex-row justify-between pt-7">
            <h2 className="font-semibold text-foreground">Total</h2>
            <p className="font-semibold">R$ 27,50</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="flex justify-between">
          <div className="items-center mx-auto pt-3">
            <Button className="bg-[#C67C4E] text-2xl rounded-lg w-[315px] h-[62px] ">
              Comprar
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
