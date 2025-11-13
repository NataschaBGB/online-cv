import profile from '../../assets/profile.png';
import './Profile.sass';

export default function Profile() {
  
    return (
        <>
            <section className="portfolio__profile">
                    
                <figure className="portfolio__profile-titles">
                    <div className="portfolio__profile-image">
                        <img src={profile} alt="nataschabjerning_profile" />
                    </div>
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>About me</h2>
                    </figcaption>
                </figure>

                <article className="portfolio__profile-text">
                    <p>Passionate front-end web developer based in Brøndby, Denmark, with strong skills in HTML, SCSS, JavaScript, PHP, and WordPress, and working knowledge of React, Vite, and API integration.</p>
                    
                    <p>I enjoy creating user-friendly, visually engaging, and high-performing digital experiences that bridge design and technology.</p>
                    
                    <p>Curious and detail-oriented by nature, I’m always exploring new tools and trends to refine my craft and deliver modern, responsive web solutions that truly connect with users.</p>
                </article>

            </section>
        </>
    )
}