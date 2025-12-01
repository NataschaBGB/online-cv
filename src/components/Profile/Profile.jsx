import profile from '../../assets/profile.png';
import './Profile.sass';

export default function Profile() {
  
    return (
        <>
            <article className="profile">
                    
                <figure className="profile__titles">
                    <img src={profile} alt="nataschabjerning_profile" className="profile__image" />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>About me</h2>
                    </figcaption>
                </figure>

                <section className="profile__text">
                    <p>Passionate front-end web developer based in Brøndby, Denmark, with strong skills in HTML, SCSS, JavaScript, PHP, and WordPress, and working knowledge of React, Vite, and API integration.</p>
                    
                    <p>I enjoy creating user-friendly, visually engaging, and high-performing digital experiences that bridge design and technology.</p>
                    
                    <p>Curious and detail-oriented by nature, I’m always exploring new tools and trends to refine my craft and deliver modern, responsive web solutions that truly connect with users.</p>
                </section>

            </article>
        </>
    )
}