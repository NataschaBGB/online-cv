import interests from '../../assets/interests.png'
import './Interests.sass'

export default function Interests() {
    
    return (
        <section className="interests">
            <figure className="interests__titles">
                <div className="interests__image">
                    <img src={interests} alt="portfolio_interests_icon" />
                </div>
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Interests</h2>
                </figcaption>
            </figure>
            <section className="interests__content">
                <div className="left">
                    <ul>
                        <li>Coding</li>
                        <li>Creative projects</li>
                        <li>Computer games</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Reading books</li>
                        <li>Roleplay</li>
                    </ul>
                </div>
            </section>
        </section>
    )
}   