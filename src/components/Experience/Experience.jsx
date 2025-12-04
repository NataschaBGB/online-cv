import experience from '../../assets/experience.png'
import './Experience.sass'

export default function Experience() {
    
    return (
        <>
            <section className="experiences">

                <figure className="experiences__titles">
                    <img src={experience} alt="experiences_image" className="experiences__image" />                    
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Experience</h2>
                    </figcaption>
                </figure>

                <article className="experience chainbox-intern">
                    <section className='experience__title'>
                        <h3 className='experience__name'>Chainbox</h3>
                        <div className="experience__dates">
                            <p>April 2023 -</p>
                            <p>November 2023</p>
                        </div>
                    </section>
                    
                    <section className="experience__text">
                        <h3>Internship</h3>
                        <div className="experience__list">
                            <ul>
                                <li>PHP</li>
                                <li>Vue.js</li>
                            </ul>
                        </div>
                    </section>
                </article>
                
                <article className="experience pz-intern">
                    <section className='experience__title'>
                        <h3 className='experience__name'>Personalezonen</h3>
                        <div className="experience__dates">
                            <p>December 2023 -</p>
                            <p>July 2024</p>
                        </div>
                    </section>
                    
                    <section className="experience__text">
                        <h3>Internship</h3>
                        <div className="experience__list">
                            <ul>
                                <li>PHP</li>
                                <li>WordPress</li>
                                <li>Responsivt design</li>
                                <li>jQuery</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </section>
                </article>

                <article className="experience pz-developer">
                    <section className='experience__title'>
                        <h3 className='experience__name'>Personalezonen</h3>
                        <div className="experience__dates">                    
                            <p>August 2024 -</p>
                            <p>February 2025</p>
                        </div>
                    </section>

                    <section className="experience__text">
                        <h3>Developer</h3>
                        <p>During my time at the company, I have gained more experience with HTML, SCSS, jQuery, JavaScript, PHP, and WordPress.<br/>
                        Among other things, I have created a calendar and a FAQ section for a large zoo using HTML, SCSS, PHP, WordPress, and jQuery, as well as coded an entire internet café website from scratch.</p>
                    </section>
                </article>
            </section>

        </>
    )
}