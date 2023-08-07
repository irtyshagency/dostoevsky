import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Chat from "@/app/components/Chat";
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative container mt-32">

        <div className="flex flex-row">
          <div className="basis-3/12">
            <div className="bg-white px-6 py-3 shadow-xl rounded-2xl">
              <Chat />
            </div>
          </div>
          <div className="basis-9/12">
            <div className='pl-24 pr-6'>
              <Form />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>

  )
}
