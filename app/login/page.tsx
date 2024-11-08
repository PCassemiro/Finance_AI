import Image from "next/image"; //16.5kb (gzipped: 6.1k)
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
//
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="m-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/Frame.svg"
          width={173}
          height={39}
          alt="finance AI"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold" mb-3>
          Bem-vindo
        </h1>
        <p className="text-muted-foreground" mb-8>
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login_img.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
