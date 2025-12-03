import interests from '../../assets/interests.png'
import './Interests.sass'

export default function Interests() {
    
    return (
        <section className="interests">
            <figure className="interests__titles">    
                <img src={interests} alt="portfolio_interests_icon" className="interests__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Interests</h2>
                </figcaption>
            </figure>

            <section className="interests__list">
                <ul>
                    <li>Coding</li>
                    <li>Creative projects</li>
                    <li>Computer games</li>
                    <li>Reading books</li>
                    <li>Roleplay</li>
                </ul>
            </section>
        </section>
    )
}   