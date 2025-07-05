'use client'
import { useEffect, useRef, useState } from "react"

export default function Contador({ time, setTime, endTime }) {
    const tempoAudio = useRef(null)
    const [play, setPlay] = useState(true)

    // const [tempo, setTempo] = useState(time);
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        
        if (time == 0) {
            setVisivel(false)
            endTime()
            return
        }
         
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
                console.log(time);
    
                if (time <= 20) {
                    setVisivel(true)
                    play ? tempoAudio.current.play() : null
                    setPlay(false)
                }
                else {
                    setVisivel(false)
                }
            }
        }, 1000)

        return() => clearTimeout(timer)

    },[time, setTime]);

    return (
        <div>
            <audio ref={tempoAudio} src="audios/tempo.mp3"></audio>
            
            {visivel && (
                <div className="contadorBox">
                    <div className="contador">
                        <span className="numero-centralizado">{time}</span>
                    </div>
                </div>
            )}
        </div>
    )
}