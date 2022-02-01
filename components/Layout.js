import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

function Layout({children}){

    const router = useRouter();
    if (router.pathname.startsWith('/login') || router.pathname.startsWith('/signup')) {
        return (
          <>
              {children}
              <Footer/>
          </>
        )
      }


    return(
        <>
            <Header text1="Home cart"
                text2="Hello, Sign in"
                text3="Account & List"
                text4="Returns"
                text5="& Orders" />
            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout;