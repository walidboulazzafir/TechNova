import AdminLayout from '@/Layouts/AdminLayout'
import { useForm, Link } from '@inertiajs/react'

export default function Form({ post, categories }) {
    const { data, setData, post: submit, put, processing, errors } = useForm({
        title:       post?.title       ?? '',
        category_id: post?.category_id ?? '',
        excerpt:     post?.excerpt     ?? '',
        body:        post?.body        ?? '',
        icon:        post?.icon        ?? '📄',
        read_time:   post?.read_time   ?? 3,
    })

    function handleSubmit(e) {
        e.preventDefault()
        if (post) {
            put(`/admin/posts/${post.id}`)
        } else {
            submit('/admin/posts')
        }
    }

    return (
        <AdminLayout>
            <h1>{post ? "Modifier l'Article" : "Créer un Nouvel Article"}</h1>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Titre de l'Article</label>
                        <input
                            type="text"
                            placeholder="Entrez le titre..."
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                        {errors.title && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.title}</span>}
                    </div>

                    <div className="form-group">
                        <label>Catégorie</label>
                        <select
                            value={data.category_id}
                            onChange={e => setData('category_id', e.target.value)}
                        >
                            <option value="">-- Choisir une catégorie --</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.category_id && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.category_id}</span>}
                    </div>

                    <div className="form-group">
                        <label>Icône (emoji)</label>
                        <input
                            type="text"
                            placeholder="📄"
                            value={data.icon}
                            onChange={e => setData('icon', e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Temps de lecture (minutes)</label>
                        <input
                            type="number"
                            value={data.read_time}
                            onChange={e => setData('read_time', e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Résumé</label>
                        <textarea
                            rows="3"
                            placeholder="Courte description..."
                            value={data.excerpt}
                            onChange={e => setData('excerpt', e.target.value)}
                        />
                        {errors.excerpt && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.excerpt}</span>}
                    </div>

                    <div className="form-group">
                        <label>Contenu</label>
                        <textarea
                            rows="15"
                            placeholder="Écrivez le contenu ici..."
                            value={data.body}
                            onChange={e => setData('body', e.target.value)}
                        />
                        {errors.body && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.body}</span>}
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn" disabled={processing}>
                            {processing ? 'Enregistrement...' : "Enregistrer l'Article"}
                        </button>
                        <Link
                            href="/admin/posts"
                            className="btn"
                            style={{ background: 'var(--text-secondary)' }}
                        >
                            Annuler
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}