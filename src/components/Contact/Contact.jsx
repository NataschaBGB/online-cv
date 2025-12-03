import contact from '../../assets/contact.png';
import smartphone from '../../assets/smartphone.png';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import './Contact.sass';

export default function Contact() {
    
    return (
        <section className="contact">
            
            <figure className="contact__titles">
                <img src={contact} alt="portfolio_contact_icon" className="contact__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Contact</h2>
                </figcaption>
            </figure>

            <section className="contact__content">
                
                <figure className="contact__phone">
                    <img src={smartphone} alt="nataschabjerning_phone" className="contact__icon" />
                    <h3>23 95 04 12</h3>
                </figure>
                
                <figure className="contact__email">
                    <img src={mail} alt="nataschabjerning_mail" className="contact__icon" />
                    <a href="mailto:nannabjerning@hotmail.com">nannabjerning@hotmail.com</a>
                </figure>
            
                <figure className="contact__linkedin">
                    <img src={linkedin} alt="nataschabjerning_linkedin" className="contact__icon" />
                    <a href="https://www.linkedin.com/in/natascha-gutenberg-bjerning/" target="_blank">LinkedIn Profile</a>
                </figure>

            </section>
        </section>
    )

}