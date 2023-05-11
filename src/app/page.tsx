import { Hero } from "@/components/Hero";
import { NewsLetterForm } from "@/components/NewsLetterForm";

export default function Home() {
  return (
    <div
      className="
      xs:min-w-[18.75rem] xs:mx-auto xs:my-0 xs:max-w-lg xs:flex-col xs:gap-12 xs:p-6
      sm:p-12
      md:max-w-full md:flex-row md:gap-24
      flex justify-center pt-24 "
    >
      <Hero />
      <NewsLetterForm />
    </div>
  );
}
