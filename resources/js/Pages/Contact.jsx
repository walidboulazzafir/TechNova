import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'

export default function Contact() {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/contact')
    }

    return (
        <MainLayout>
            <div className="container">
                <div className="contact-form">
                    <h2>Contactez-nous</h2>

                    {wasSuccessful && (
                        <div style={{
                            background: '#d1fae5',
                            border: '1px solid #6ee7b7',
                            padding: '1rem',
                            borderRadius: '6px',
                            marginBottom: '1.5rem',
                            color: '#065f46'
                        }}>
                            Message envoyé avec succès! ✅
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nom</label>
                            <input
                                type="text"
                                placeholder="Votre nom"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                            />
                            {errors.name && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="email@exemple.com"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Votre message..."
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                            />
                            {errors.message && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn" disabled={processing}>
                            {processing ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}