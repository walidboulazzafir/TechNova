import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

export default function Category({ category }) {
    return (
        <MainLayout>
            <div className="container">
                <section className="hero" style={{ padding: '4rem 0' }}>
                    <h1>{category.name}</h1>
                    <p>Archive de tous les articles liés à {category.name}.</p>
                </section>

                <div className="post-grid">
                    {category.posts.map(post => (
                        <article className="post-card" key={post.id}>
                            <Link href={`/posts/${post.slug}`}>
                                <div className="post-image">{post.icon}</div>
                                <div className="post-content">
                                    <span className="post-category">{category.name}</span>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-footer">
                                        <span>{new Date(post.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        <span>{post.read_time} min de lecture</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}

                    {category.posts.length === 0 && (
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Aucun article dans cette catégorie pour le moment.
                        </p>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}