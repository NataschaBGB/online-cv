import experience from '../../assets/experience.png'
import './Experience.sass'

export default function Experience() {
    
    return (
        <>
            <section className="portfolio__experiences">

                <figure className="portfolio__experiences-titles">
                    <img src={experience} alt="portfolio_experiences_image" className="portfolio__experiences-image" />                    
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Experience</h2>
                    </figcaption>
                </figure>

                <article className="portfolio__experience chainbox-intern">
                    <div className="portfolio__experience-dates">
                        <h3>Chainbox</h3>
                        <p>April 2023 -</p>
                        <p>November 2023</p>
                    </div>
                    <div className="portfolio__experience-text">
                        <h3>Internship</h3>
                        <div className="list">
                            <ul>
                                <li>PHP</li>
                                <li>Vue.js</li>
                            </ul>
                        </div>
                    </div>
                </article>
                
                <article className="portfolio__experience pz-intern">
                    <div className="portfolio__experience-dates">
                        <h3>Personalezonen</h3>
                        <p>December 2023 -</p>
                        <p>Juli 2024</p>
                    </div>
                    <div className="portfolio__experience-text">
                        <h3>Internship</h3>
                        <div className="list">
                            <ul>
                                <li>PHP</li>
                                <li>WordPress</li>
                                <li>Responsivt design</li>
                            </ul>
                            <ul>
                                <li>jQuery</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="portfolio__experience pz-developer">
                    <div className="portfolio__experience-dates">
                        <h3>Personalezonen</h3>
                        <p>August 2024 -</p>
                        <p>Februar 2025</p>
                    </div>
                    <div className="portfolio__experience-text">
                        <h3>Developer</h3>
                        <p>I løbet af min tid hos firmaet har jeg fået mere erfaring med HTML, SCSS, jQuery, JavaScript, PHP og WordPress.<br/>
                        Jeg har blandt andet lavet en kalender og en FAQ for en større Zoo i HTML, SCSS, PHP, WordPress og jQuery samt kodet en hel netcafé-hjemmeside fra bunden.</p>
                    </div>
                </article>
            </section>

        </>
    )
}