import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'




export default function Home() {

    return (
        <div>
            <Head>
                <title >
                    Home - cart.com
                </title>
            </Head>
            <Header text1="Home cart"
                text2="Hello, Sign in"
                text3="Account & List"
                text4="Returns"
                text5="& Orders" />
            <main>
            </main>

            <Footer />
        </div>
    )
}
