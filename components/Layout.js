import { useRouter } from 'next/router';

export const Layout = ({ children }) => {

    const router = useRouter();
    if (router.pathname.startsWith('/login') || router.pathname.startsWith('/signup')) {
        return (
            <div>
                {children}
            </div>
        )
    }


    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;