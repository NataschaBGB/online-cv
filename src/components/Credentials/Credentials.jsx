import drivinglicense from '../../assets/drivinglicense.png'
import language from '../../assets/language.png'
import './Credentials.sass'


export default function Credentials() {
  
    return (
        <section className="credentials">

            <section className="credentials__drivinglicense">

                <figure className="credentials__titles">
                    <img src={drivinglicense} alt="nataschabjerning_drivinglicense" className='credentials__image' />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Driving License</h2>
                    </figcaption>
                </figure>
                
                <h3>Category B</h3>
            
            </section>

            <article className="credentials__languages">
                
                <figure className="credentials__titles">
                    <img src={language} alt="nataschabjerning_language" className='credentials__image' />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Languages</h2>
                    </figcaption>
                </figure>
                
                <section className="credentials__languages-table">
                    <table>
                        <tr>
                            <th>Language</th>
                            <th>Verbal</th>
                            <th>Written</th>
                        </tr>
                        <tr>
                            <td>Danish / Dansk</td>
                            <td>Fluent</td>
                            <td>Fluent</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>Fluent</td>
                            <td>Fluent</td>
                        </tr>
                    </table>
                </section>

            </article>

        </section>
    );
}