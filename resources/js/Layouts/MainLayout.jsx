import { Link, usePage } from '@inertiajs/react'

export default function MainLayout({ children }) {
    const { url } = usePage()
    const { auth } = usePage().props

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <Link href="/" className="logo">TechNova</Link>
                        <ul className="nav-links">
                            <li>
                                <Link href="/" className={url === '/' ? 'active' : ''}>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/ai" className={url === '/category/ai' ? 'active' : ''}>
                                    IA & Robotique
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/web" className={url === '/category/web' ? 'active' : ''}>
                                    Dév Web
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/cloud" className={url === '/category/cloud' ? 'active' : ''}>
                                    Cloud Computing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={url === '/about' ? 'active' : ''}>
                                    À Propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={url === '/contact' ? 'active' : ''}>
                                    Contact
                                </Link>
                            </li>
                            {auth.user ? (
                                <li>
                                    <Link href="/admin" className="btn" style={{padding: '0.4rem 1rem'}}>
                                        Admin
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login" className="btn" style={{padding: '0.4rem 1rem'}}>
                                        Connexion
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <div className="container">
                    <p>&copy; 2026 TechNova</p>
                </div>
            </footer>
        </>
    )
}