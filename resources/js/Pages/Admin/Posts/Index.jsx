import AdminLayout from '@/Layouts/AdminLayout'
import { Link, router } from '@inertiajs/react'

export default function Index({ posts }) {

    function handleDelete(post) {
        if (confirm(`Supprimer "${post.title}" ?`)) {
            router.delete(`/admin/posts/${post.id}`)
        }
    }

    return (
        <AdminLayout>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Gérer les Articles</h1>
                <Link href="/admin/posts/create" className="btn">+ Nouvel Article</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Date</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{new Date(post.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                            <td style={{ textAlign: 'right' }}>
                                <Link
                                    href={`/posts/${post.slug}`}
                                    style={{ color: 'var(--accent-color)', marginRight: '1rem' }}
                                >
                                    Voir
                                </Link>
                                |
                                <Link
                                    href={`/admin/posts/${post.id}/edit`}
                                    style={{ color: 'var(--accent-color)', margin: '0 1rem' }}
                                >
                                    Modifier
                                </Link>
                                |
                                <button
                                    onClick={() => handleDelete(post)}
                                    style={{ color: '#f85149', marginLeft: '1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    )
}