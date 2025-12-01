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
                    
                <article className="education">
                    <section className='education__title'>
                        <h3 className='education__name'>AspIT</h3>
                        <div className="education__dates">
                            <p>August 2021 -</p>
                            <p>July 2024</p>
                        </div>
                    </section>
                    
                    <section className="education__list">
                        <ul>
                            <li>Web Introduction</li>
                            <li>Web Construction</li>
                            <li>Web Development</li>
                            <li>Web development & databases</li>
                            <li>Programming Introduction</li>
                            <li>Application Programming</li>
                            <li>IT Introduction</li>
                            <li>IT Desktop, Server and Network</li>
                        </ul>
                    </section>
                </article>

                <article className="education">
                    <section className='education__title'>
                        <h3 className='education__name'>Roskilde Tekniske Skole</h3>
                        <div className="education__dates">
                            <p>August 2025 -</p>
                            <p>Now</p>
                        </div>
                    </section>
                    <section className="education__list">
                        <ul>
                            {/* Opdater lister med erfaring fra skole */}
                            <li>Web Introduction</li>
                            <li>Web Construction</li>
                            <li>Web Development</li>
                            <li>Webudvikling og databaser</li>
                            <li>Programming Introduction</li>
                            <li>Application Programming</li>
                            <li>IT Introduction</li>
                            <li>IT Desktop, Server and Network</li>
                        </ul>
                    </section>
                </article>
                 
            </section>
        </>
    )

}