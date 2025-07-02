'use client'
import { useEffect, useState } from "react"

export default function Contador({ time, setTime, endTime }) {

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
    
                if (time <= 30) {
                    setVisivel(true)
                }
                else {
                    setVisivel(false)
                }
            }
        }, 100)

        return() => clearTimeout(timer)

    },[time, setTime]);

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