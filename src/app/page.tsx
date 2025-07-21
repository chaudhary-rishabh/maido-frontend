import HomeAllRounder from "@/components/home/HomeAllRounder";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeReview from "@/components/home/HomeReview";
import HomeServiceCard from "@/components/home/HomeServicesCard";
import HomeServiceCardLeft from "@/components/home/HomeServicesCardLeft";
import Hero from "@/components/home/Hero";
import BookingCard from "@/components/UI/BookingCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BookingCard />
      <div className="w-11/12 max-w-5xl mx-auto bg-white my-10 rounded-3xl py-4">
        <HomeServiceCard />
        <HomeServiceCardLeft />
      </div>
      <Image className="mx-auto w-8/12 bg-contain rounded-3xl" src="/maidoGridCartoon.png" alt="slider" height={500} width={700} />
      <HomeAllRounder />
      <HomeReview />
      <HomeFAQ />
    </div>
  );
}
