import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm">
      <div className="flex items-center gap-4">
        <Image src="/news-letter.svg" alt="" width={48} height={48} priority />
        <span className="text-purple-300 text-xl">NEWSLETTER</span>
      </div>

      <h1
        className="xs:text-[1.5rem] xs:leading-8
          md:text-[2rem] md:leading-10
          lg:text-[2.5rem] lg:leading-[3.25rem]
          font-bold"
      >
        Receba conteúdos inéditos e novidades da Rocketseat
      </h1>

      <div className="xs:flex-col-reverse lg:flex-row flex gap-6">
        <div className="flex flex-row w-full justify-between">
          <Image
            src="/participants.svg"
            alt=""
            width={120}
            height={67}
            priority
          />
          <Image
            className="md:rotate-[-90deg] lg:hidden"
            src="/arrow-icon.svg"
            alt=""
            width={25}
            height={24}
            priority
          />
        </div>
        <p className="text-gray-100 xs:text-sm xs:leading-6 lg:text-lg lg:leading-7">
          Inscreva-se e receba conteúdos e novidades de forma totalmente
          gratuita, conforme o seu momento na programação, e se mantenha
          atualizado junto com as tecnologias.
        </p>
      </div>
    </div>
  );
}
