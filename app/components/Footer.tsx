import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="site-footer relative">

                <div className="">

                    <p className="text-center">© <Link href="/">Dostoevsky AI</Link>, {` ${new Date().getFullYear()}`}</p>

                </div>
        </footer>
    )
}