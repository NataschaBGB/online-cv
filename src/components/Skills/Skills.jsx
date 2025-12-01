import skills from '../../assets/skills.png'
import './Skills.sass'

export default function Skills() {

    return (
        <section className='skills'>
            <figure className="skills__titles">
                <div className="skills__image">
                    <img src={skills} alt="portfolio_skills_icon" />
                </div>
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Skills</h2>
                </figcaption>
            </figure>
            <section className="skills__content">
                <div className="left">
                    <ul>
                        <li>Time management</li>
                        <li>Creative Thinking</li>
                        <li>Responsible</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Patience</li>
                        <li>Cooperation</li>
                        <li>Detail oriented</li>
                    </ul>
                </div>
            </section>
        </section>
    )

}