import skills from '../../assets/skills.png'
import './Skills.sass'

export default function Skills() {

    return (
        <section className='skills'>
            <figure className="skills__titles">
                <img src={skills} alt="skills_icon" className="skills__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Skills</h2>
                </figcaption>
            </figure>

            <section className="skills__list">
                <ul>
                    <li>Time management</li>
                    <li>Creative Thinking</li>
                    <li>Responsible</li>
                    <li>Patience</li>
                    <li>Cooperation</li>
                    <li>Detail oriented</li>
                </ul>
            </section>
        </section>
    )

}