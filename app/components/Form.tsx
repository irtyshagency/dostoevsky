export default function Form() {
    return (
        <form action="/api/form" method="post">

            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Чат</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Напишите сюда ваш запров или вопрос. Постарайтесь сформулировать понятно.
                    </p>
                    <div className="col-span-full">
                        <label htmlFor="chat" className="block text-sm font-medium leading-6 text-gray-900">
                            Поле Чат
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="chat"
                                name="chat"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Отправить
                </button>
            </div>
        </form>
    )
}