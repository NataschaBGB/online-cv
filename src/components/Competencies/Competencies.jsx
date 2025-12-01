import strengths from '../../assets/strengths.png';
import './Competencies.sass';

export default function Competencies() {
    return (
        <section className="competencies">
            
            <figure className="competencies__titles">
                <div className="competencies__image">
                    <img src={strengths} alt="portfolio_competencies_icon" />
                </div>
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Competencies</h2>
                </figcaption>
            </figure>

            <section className="competencies__content">
                <div className="left">
                    <ul>
                        <li>Frontend development</li>
                        <li>Wordpress</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Web development</li>
                        <li>API integration</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>PHP</li>
                        <li>JQuery</li>
                        <li>JavaScript</li>
                        <li>Responsive design</li>
                        <li>React</li>
                        <li>Vite</li>
                    </ul>
                </div>
            </section>

        </section>
    )
}