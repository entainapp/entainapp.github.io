import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Logo } from '../ui/Logo'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Entain</title>
                <meta name="description" content="entain.io" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <div className="description">
                    <Logo />
                    <div className="flex flex-row gap-10">
                        <Link href="/signin">SignIn</Link>
                        <Link href="/signup">SignUp</Link>
                    </div>
                </div>

                <div className="center">
                    <h1>Here is Entain home</h1>
                </div>
            </div>
        </>
    )
}
