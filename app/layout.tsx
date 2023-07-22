import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic','latin'] })

export const metadata: Metadata = {
  title: 'Dostoevsky AI',
  description: 'Писатель',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className + ' bg-slate-50'}>{children}</body>
    </html>
  )
}
