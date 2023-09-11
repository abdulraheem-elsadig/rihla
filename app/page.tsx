import {
  About,
  BestDestination,
  BookSteps,
  Faq,
  Hero,
  NewsLetter,
  Services,
  Testimonial,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <BestDestination />
      <Testimonial />
      <BookSteps />
      <Faq />
      <NewsLetter />
    </div>
  );
}
