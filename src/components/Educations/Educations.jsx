import education from '../../assets/education.png'
import './Educations.sass'

export default function Educations() {
    
    return (
        <>
            <section className="educations">

                <figure className="educations__titles">
                    <img src={education} alt="educations_image" className="educations__image" />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Education</h2>
                    </figcaption>
                </figure>

                <section className="educations__content">
                    
                    <article className="education">
                        <div className="education__dates">
                            <h3>AspIT</h3>
                            <p>August 2021 -</p>
                            <p>July 2024</p>
                        </div>
                        <div className="education__text">
                            <div className="list">
                                <ul>
                                    <li>Web Introduction</li>
                                    <li>Web Construction</li>
                                    <li>Web Development</li>
                                    <li>Web development & databases</li>
                                </ul>
                                <ul>
                                    <li>Programming Introduction</li>
                                    <li>Application Programming</li>
                                    <li>IT Introduction</li>
                                    <li>IT Desktop, Server and Network</li>
                                </ul>
                            </div>
                            <p>AspIT er en IT-uddannelse, der er tilpasset folk med autisme og/eller ADHD. Med den grundlæggende viden, vi får om kodning og hardware, bliver man sendt i praktik hos et eller flere passende firmaer.</p>
                        </div>
                    </article>

                    <article className="education">
                        <div className="education__dates">
                            <h3>Roskilde Tekniske Skole - Web Developer</h3>
                            <p>August 2025 -</p>
                            <p>Now</p>
                        </div>
                        <div className="education__text">
                            <div className="list">
                                <ul>
                                    {/* Opdater lister med erfaring fra skole */}
                                    <li>Web Introduction</li>
                                    <li>Web Construction</li>
                                    <li>Web Development</li>
                                    <li>Webudvikling og databaser</li>
                                </ul>
                                <ul>
                                    <li>Programming Introduction</li>
                                    <li>Application Programming</li>
                                    <li>IT Introduction</li>
                                    <li>IT Desktop, Server and Network</li>
                                </ul>
                            </div>
                            <p>Kort beskrivelse af skole</p>
                        </div>
                    </article>
                    
                </section>
                
            </section>
        </>
    )

}