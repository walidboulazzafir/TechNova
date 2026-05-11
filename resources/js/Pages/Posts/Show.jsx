import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

export default function Show({ post }) {
    return (
        <MainLayout>
            <div className="container">
                <article className="post-detail">
                    <header className="post-header">
                        <span className="post-category">{post.category.name}</span>
                        <h1>{post.title}</h1>
                        <div className="post-meta">
                            <span>Par {post.author.name}</span>
                            <div className="dot"></div>
                            <span>{new Date(post.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            <div className="dot"></div>
                            <span>{post.read_time} min de lecture</span>
                        </div>
                    </header>

                    <div className="post-hero-image">{post.icon}</div>

                    <div className="post-body">
                        <p>{post.body}</p>
                    </div>
                </article>
            </div>
        </MainLayout>
    )
}