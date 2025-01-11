import { useState, useRef } from "react";
// Styles
import '../styles/Music.css'
// Assets
import Audio from '../assets/music.mp3'

const Music = () => {

    const [isPaused, setIsPaused] = useState(true);
    const audioRef = useRef(null);

    const manejarPausaReproduccion = () => {
        if (isPaused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPaused(!isPaused);
    };

    return (
        <div className="music">
            <audio ref={audioRef} loop>
                <source src={Audio} type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
            </audio>

            <div onClick={manejarPausaReproduccion}>
                {isPaused ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
            </div>
        </div>
    )
}

export default Music
