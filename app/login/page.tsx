import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="lg:grid h-full lg:grid-cols-2 bg-[#131313]">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8 ">
        <h1 className="mb-3 text-4xl font-bold text-white">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          numquam laboriosam dignissimos itaque doloribus at molestias, officia
          eligendi tempore quam ex ab magni quasi? Consequatur sint recusandae
          voluptates itaque cum!
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>

      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login.jpeg"
          alt="Faça seu login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
