import drivinglicense from '../../assets/drivinglicense.png'
import language from '../../assets/language.png'
import './Credentials.sass'


export default function Credentials() {
  
    return (
        <section className="credentials">
            <figure className="credentials__drivinglicense">
                <div className="credentials__titles">
                    <img src={drivinglicense} alt="nataschabjerning_drivinglicense" className='credentials__image' />
                    <h2>Driving License</h2>
                </div>
                <h3>Category B</h3>
            </figure>
            <article className="credentials__language">
                <figure className="credentials__titles">
                    <img src={language} alt="nataschabjerning_language" className='credentials__image' />
                    <h2>Language</h2>
                </figure>
                <section className="language-content">
                    <div className="language-dk">
                        <h3>Danish | Dansk</h3>
                        <h4>Verbal: Fluent</h4>
                        <h4>Written: Fluent</h4>
                    </div>
                    <div className="language-en">
                        <h3>English</h3>
                        <h4>Verbal: Fluent</h4>
                        <h4>Written: Fluent</h4>
                    </div>
                </section>
            </article>
        </section>
    );
}