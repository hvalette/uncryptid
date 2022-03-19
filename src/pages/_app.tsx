import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Uncryptid</title>
            </Head>
            <NavBar></NavBar>
            <main className="h-1 min-h-screen py-16">
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
