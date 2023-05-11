import { Hero } from "@/components/Hero";
import { NewsLetterForm } from "@/components/NewsLetterForm";

export default function Home() {
  return (
    <div
      className="
      xs:min-w-[18.75rem] xs:mx-auto xs:my-0 xs:max-w-lg xs:flex-col xs:gap-12 xs:p-6 xs:py-12 xs:items-center
      sm:p-12
      md:max-w-full md:flex-row md:gap-20 md:p-24 md:items-start
      flex min-h-screen justify-center"
    >
      <Hero />
      <NewsLetterForm />
    </div>
  );
}
