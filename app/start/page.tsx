import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Home() {
  return (
      <>
       <Header />

        <main className="relative mt-32">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">На какую тему будет сочинять?</h2>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Добавьте описание
                </label>
                <div className="mt-2.5">
              <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                </div>
            </div>
        </main>

        <Footer />
      </>

  )
}
