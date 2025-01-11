// Styles
import '../styles/Parents.css'
// Assets
import Image from '../assets/12.jpg'

const Parents = () => {
    return (
        <div className="parents">
            <div className="img">
                <img src={Image} alt="Image" />
            </div>
            <div className="info">
                <div className="thanks">
                    <p className="text">CON LA <span>Bendición</span> DE DIOS y NUESTROS PADRES</p>

                    <div data-aos="fade-up">
                        <p className="type">Padres del novio</p>
                        <p className="name">Armando Cano</p>
                        <p className="name">Angeles Meza</p>
                    </div>

                    <div data-aos="fade-up">
                        <p className="type">Padres de la novia</p>
                        <p className="name">Javier Diaz</p>
                        <p className="name">Jenny Gonzalez</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parents
