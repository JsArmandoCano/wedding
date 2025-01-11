// Styles
import '../styles/Gift.css'
// Assets
import Liverpool from '../assets/liverpool.png'

const Gift = () => {
    return (
        <div className="gift">
            <div className="content" data-aos="fade-up">
                <h5>Mesa de Regalos</h5>
                <img src={Liverpool} alt="Liverpool" />
                <div className="btn_liv">
                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51595061" target="_blank" rel="noopener noreferrer">Ir a Liverpool</a>
                </div>
            </div>
        </div>
    )
}

export default Gift
