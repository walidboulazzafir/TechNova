import MainLayout from '@/Layouts/MainLayout'

export default function About() {
    return (
        <MainLayout>
            <div className="container">
                <section className="about-section">
                    <h2>Notre Histoire</h2>
                    <p>TechNova a été lancé avec un seul objectif : rendre la technologie complexe simple et accessible à tous.</p>
                    <p>Nous proposons des analyses approfondies, des tutoriels et des actualités sur le monde de la tech.</p>
                </section>
            </div>
        </MainLayout>
    )
}