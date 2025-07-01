'use client'
import { useEffect, useState } from "react"

export default function Contador({ time, startTime }) {

    const [tempo, setTempo] = useState(time);
    const [visivel, setVisivel] = useState(false)

    setTimeout(() => {

        if (tempo == 0) {
            setVisivel(false)
        }
        if (tempo > 0) {
            setTempo(tempo - 1);
            console.log(tempo);

            if (tempo <= 30) {
                setVisivel(true)
            }



        }
    }, 1000)

    return (
        <div>
            
            {visivel && (
                <div className="contadorBox">
                    <div className="contador">
                        <span onLoad={startTime} className="numero-centralizado">{tempo}</span>
                    </div>
                </div>
            )}
        </div>
    )
}