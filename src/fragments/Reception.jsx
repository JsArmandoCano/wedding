// Styles
import '../styles/Reception.css'
// Assets
import Salon from '../assets/reception.jpg'

const Reception = () => {
    return (
        <div className="reception">
            <div className="img" data-aos="flip-left">
                <img src={Salon} alt="Recepción" />
            </div>
            
            <div className="direction">
                <h3>RECEPCIÓN</h3>
                <p>Salon de Eventos Cipres Atarasquillo</p>

                <div className="btn_maps">
                    <a href="https://maps.app.goo.gl/XE1DRPbJBgGrLPvR8" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-location-dot"></i> Ir a Google Maps
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Reception
