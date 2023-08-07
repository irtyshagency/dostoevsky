import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import GetAccess from './get-access';

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <GetAccess />

      <main className="">
        [main]
      </main>

      <Footer />
    </>

  )
}
