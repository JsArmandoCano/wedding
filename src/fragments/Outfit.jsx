// Styles
import '../styles/Outfit.css'
// Assets
import Dress from '../assets/dress.png'
import Suit from '../assets/suit.png'

const Outfit = () => {
    return (
        <div className="outfit">
            <div className="info">
                <h4 data-aos="flip-up">Codigo de Vestimenta</h4>
                <h5 data-aos="flip-up">Formal</h5>
                <div className="logos">
                    <img data-aos="fade-up" src={Suit} alt="Traje" />
                    <img data-aos="fade-down" src={Dress} alt="Vestido" />
                </div>
            </div>
            
            <div className="img"></div>
        </div>
    )
}

export default Outfit
