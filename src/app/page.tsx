import { Hero } from "@/components/Hero";
import { NewsLetterForm } from "@/components/NewsLetterForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center pt-24 p-12">
      <Hero />
      <NewsLetterForm />
    </div>
  );
}
