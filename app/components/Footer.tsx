import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="site-footer py-6 relative">

            <div className="">

                <p className="text-center">© <Link href="/">Dostoevsky AI</Link>, {` ${new Date().getFullYear()}`}</p>

            </div>
        </footer>
    )
}