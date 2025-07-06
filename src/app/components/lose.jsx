import React from "react"
export default function Lose({money, restart}) {
    return (
        <div className="loseBox">
            <h1>Você perdeu</h1>
            <h2>Você ganhou: R${money}</h2>
            <button onClick={() => {
                restart()
                }}>Voltar a tela inicial</button>
        </div>
    )
}