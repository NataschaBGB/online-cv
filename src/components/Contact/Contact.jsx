import contact from '../../assets/contact.png';
import smartphone from '../../assets/smartphone.png';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import './Contact.sass';

export default function Contact() {
    
    return (
        <>
            <section className="portfolio__contact">
                <figure className="portfolio__contact-titles">
                    <div className="portfolio__contact-image">
                        <img src={contact} alt="portfolio_contact_icon" />
                    </div>
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Contact</h2>
                    </figcaption>
                </figure>
                <section className="portfolio__contact-content">
                    <figure className="portfolio__contact-phone">
                        <div className="portfolio__contact-titles">
                            <div className="portfolio__contact-icon">
                                <img src={smartphone} alt="nataschabjerning_phone" />
                            </div>
                        </div>
                        <h3>23 95 04 12</h3>
                    </figure>
                    <figure className="portfolio__contact-email">
                        <div className="portfolio__contact-titles">
                            <div className="portfolio__contact-icon">
                                <img src={mail} alt="nataschabjerning_mail" />
                            </div>
                        </div>
                        <a href="mailto:nannabjerning@hotmail.com">nannabjerning@hotmail.com</a>
                    </figure>
                    <figure className="portfolio__contact-linkedin">
                        <div className="portfolio__contact-titles">
                            <div className="portfolio__contact-icon">
                                <img src={linkedin} alt="nataschabjerning_linkedin" />
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/in/natascha-gutenberg-bjerning/" target="_blank">LinkedIn Profile</a>
                    </figure>
                </section>
            </section>
        </>
    )

}