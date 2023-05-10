import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm">
      <div className="flex items-center gap-4">
        <Image
          src="/news-letter.svg"
          alt="Vercel Logo"
          width={48}
          height={48}
          priority
        />
        <span className="text-purple-300 text-xl">NEWSLETTER</span>
      </div>

      <h1 className="text-[2.5rem] font-bold leading-[3.25rem]">
        Receba conteúdos inéditos e novidades da Rocketseat
      </h1>

      <div className="flex flex-row gap-6">
        <Image
          src="/participants.svg"
          alt="Vercel Logo"
          width={120}
          height={67}
          priority
        />
        <p className="text-gray-100 text-lg leading-7">
          Inscreva-se e receba conteúdos e novidades de forma totalmente
          gratuita, conforme o seu momento na programação, e se mantenha
          atualizado junto com as tecnologias.
        </p>
      </div>
    </div>
  );
}
