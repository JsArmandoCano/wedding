import { useState, useEffect } from 'react';
// Styles
import '../styles/Invite.css'
// Assets
import Icon from '../assets/icon_table.png'
// Helper
import data from '../helpers/data'

const Invite = () => {
    const [invited, setInvited] = useState(null);

    useEffect(() => {
        const pathname = new URLSearchParams(window.location.search);
        const paramValue = pathname.get('name');

        if(paramValue!==undefined) {
            const guess = data.find(inv => inv.url === paramValue);
            setInvited(guess);
        }
    }, []);

    return (
        <div className="invite">
            <div className="content_inv" data-aos="fade-up">
                <h4>ES UN PLACER INVITARTE</h4>
                <h5>{invited?.invited}</h5>

                <p className="number">{invited?.tickets}</p>
                <p className="text">Invitados</p>

                <img src={Icon} alt="Table" />
                <p className="table">No. Mesa: {invited?.table}</p>

                <h6 style={{ marginTop: "20px" }}>Gracias por confirmar su asistencia</h6>
                <h6 style={{ fontWeight: "200" }}>Favor de presentar esta invitación en la entrada del evento</h6>

                <a href="https://www.jotform.com/form/250200445116845" target="_blank">Confirmar</a>
            </div>
        </div>
    )
}

export default Invite
