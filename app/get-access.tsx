'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export default function GetAccess() {
  const [email, setEmail] = useState('')
  // const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/start`,
      },
    })
    if (error) {
      alert(error)
    }
    // router.refresh()
  }

  // for the `session` to be available on first SSR render, it must be
  // fetched in a Server Component and passed down as a prop
  return (
    <div className="flex justify-space-around gap-4">
      <input
        type="email"
        value={email}
        autoComplete="email"
        required
        className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Укажите email для получения ссылки с доступом'
      />
      <button
        type="submit"
        className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSignIn}
      >
        Получить
      </button>
    </div>
  )
}