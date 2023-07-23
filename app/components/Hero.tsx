import Link from "next/link";


export default function Hero() {
    return (
<>
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Как мы сэкономили десятки тысяч рублей компании?{' '}
                    <a href="#" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Читать статью <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Dostoevsky AI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Ваш личный ассистент по письму на базе искусственного интеллекта.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/start"
                        className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Начать бесплатно
                    </Link>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Подробнее <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</>
    )
}