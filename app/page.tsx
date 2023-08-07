import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <main className="">
        [main]
      </main>

      <Footer />
    </>

  )
}
