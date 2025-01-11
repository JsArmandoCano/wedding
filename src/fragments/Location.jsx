// Styles
import '../styles/Location.css'
// Assets
import Ameyalco from '../assets/location.jpg'

const Location = () => {
    return (
        <div className="location">
            <div className="img" data-aos="flip-right">
                <img src={Ameyalco} alt="Ceremonia" />
            </div>
            
            <div className="direction">
                <h3>CEREMONIA</h3>
                <p>Iglesia Cristiana Interdenominacional</p>
                <p>Aposento Alto Ameyalco</p>

                <div className="btn_maps">
                    <a href="https://maps.app.goo.gl/R83DRDk91cubrg7N6" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-location-dot"></i> Ir a Google Maps
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Location
