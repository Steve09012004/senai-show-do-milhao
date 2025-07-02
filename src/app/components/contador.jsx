'use client'
import { useEffect, useState } from "react"

export default function Contador({ time, setTime }) {

    // const [tempo, setTempo] = useState(time);
    const [visivel, setVisivel] = useState(false)

    setTimeout(() => {

        if (time == 0) {
            setVisivel(false)
        }
        if (time > 0) {
            setTime(time - 1);
            console.log(time);

            if (time <= 30) {
                setVisivel(true)
            }



        }
    }, 1000)

    return (
        <div>
            
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