import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="site-footer relative">

                <div className="">

                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">Dostoevsky</Link>
                </div>
        </footer>
    )
}