import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

export default function Home({ posts }) {
    return (
        <MainLayout>
            <main className="container">
                <section className="hero">
                    <h1>La technologie de demain, aujourd'hui.</h1>
                    <p>Aperçu des technologies qui façonnent notre avenir.</p>
                </section>

                <div className="post-grid">
                    {posts.map(post => (
                        <article className="post-card" key={post.id}>
                            <Link href={`/posts/${post.slug}`}>
                                <div className="post-image">{post.icon}</div>
                                <div className="post-content">
                                    <span className="post-category">{post.category.name}</span>
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
                </div>
            </main>
        </MainLayout>
    )
}