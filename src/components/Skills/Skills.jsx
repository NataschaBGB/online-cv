import skills from '../../assets/skills.png'
import './Skills.sass'

export default function Skills() {

    return (
        <>
            <section className='portfolio__skills'>
                <figure className="portfolio__skills-titles">
                    <div className="portfolio__skills-image">
                        <img src={skills} alt="portfolio_skills_icon" />
                    </div>
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Skills</h2>
                    </figcaption>
                </figure>
                <section className="portfolio__skills-content">
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
        </>
    )

}