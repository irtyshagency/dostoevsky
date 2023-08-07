import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Chat from "@/app/components/Chat";
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative mt-32">

        <Chat />

        <Form />

      </main>

      <Footer />
    </>

  )
}
