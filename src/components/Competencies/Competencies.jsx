import strengths from '../../assets/strengths.png';
import './Competencies.sass';

export default function Competencies() {
    return (
        <>
            <section className="portfolio__competencies">
                
                <figure className="portfolio__competencies-titles">
                    <div className="portfolio__competencies-image">
                        <img src={strengths} alt="" />
                    </div>
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Kompetencer</h2>
                    </figcaption>
                </figure>

                <article className="portfolio__competencies-content">
                    <div className="left">
                        <ul>
                            <li>Frontend-udvikling</li>
                            <li>Wordpress</li>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Webudvikling</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>PHP</li>
                            <li>JQuery</li>
                            <li>JavaScript</li>
                            <li>Responsivt design</li>
                        </ul>
                    </div>
                </article>

            </section>

        </>
    )
}