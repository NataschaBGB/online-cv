import code from '../../assets/code.png'
import './Code.sass'

export default function Code() {
    
    return (
        <section className="code">
            
                <figure className="code__titles">    
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Click to see the code</h2>
                    </figcaption>
                    <a href="https://github.com/NataschaBGB/online-cv" target='_blank'>
                        <img src={code} alt="code_icon" className="code__image" />
                    </a>
                </figure>

        </section>
    )
}