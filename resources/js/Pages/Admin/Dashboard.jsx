import AdminLayout from '@/Layouts/AdminLayout'

export default function Dashboard({ totalPosts }) {
    return (
        <AdminLayout>
            <h1>Tableau de Bord</h1>
            <div className="stat-grid">
                <div className="stat-box">
                    <h3>Total des Articles</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                        {totalPosts}
                    </p>
                </div>
                <div className="stat-box">
                    <h3>Vues</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                        1 234
                    </p>
                </div>
            </div>
        </AdminLayout>
    )
}