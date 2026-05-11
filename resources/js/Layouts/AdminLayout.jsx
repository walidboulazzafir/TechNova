import { Link, usePage } from '@inertiajs/react'

export default function AdminLayout({ children }) {
    const { url } = usePage()

    return (
        <>
            <header className="admin-header">
                <div className="container">
                    <Link href="/admin" className="logo">Administration TechNova</Link>
                    <ul className="admin-nav">
                        <li>
                            <Link href="/admin" className={url === '/admin' ? 'active' : ''}>
                                Tableau de Bord
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/posts" className={url.startsWith('/admin/posts') ? 'active' : ''}>
                                Gérer les Articles
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Voir le Site
                            </Link>
                        </li>
                        <li>
                            <Link href="/logout" method="post" as="button">
                                Déconnexion
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <main className="container admin-main-section">
                {children}
            </main>
        </>
    )
}