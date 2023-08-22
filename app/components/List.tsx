const people = [
    {
        name: 'Настасья Филипповна',
        email: 'leslie.alexander@example.com',
        role: 'SEO-шник (Тексты для SEO)',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Родион Раскольников',
        email: 'michael.foster@example.com',
        role: 'SMM-щик Соцальные сети',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Парфён Рогожин',
        email: 'dries.vincent@example.com',
        role: 'SMM-щик Соцальные сети',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Соня Мармеладова',
        email: 'lindsay.walton@example.com',
        role: 'SEO-шник (Тексты для SEO)',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Варвара Доброселова',
        email: 'courtney.henry@example.com',
        role: 'Просто тексты',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Макар Девушкин',
        email: 'tom.cook@example.com',
        role: 'SEO-шник (Тексты для SEO)',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Катерина Ивановна',
        email: 'tom.cook@example.com',
        role: 'SMM-щик Соцальные сети',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function List() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
                <li key={person.email} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Online</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
