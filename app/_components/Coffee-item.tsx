import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Coffeeitem = () => {
  return (
    <Card className="min-w-[149px]  rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            alt="Cappuccino"
            fill
            className="rounded-2xl object-cover"
            src="/cappuccino.png"
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5.0</p>
          </Badge>
        </div>

        {/* TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">Cappucino</h3>
          <p className="truncate text-sm text-gray-400">Com chocolate</p>
          <div className="flex justify-between items-center  gap-3">
            <p className="text-2xl text-gray-700 font-bold">R$ 12,50</p>
            <div>
              <Button className="mt-3 w-full  bg-[#C67C4E]" asChild>
                <Link href="/details">
                  <PlusIcon className="text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Coffeeitem;
