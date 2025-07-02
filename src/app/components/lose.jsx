import React from "react"
export default function Lose({visible, money}) {
    return (
        <div className="loseBox">
            <h1>Você perdeu</h1>
            <h2>Você ganhou: R${money}</h2>
            <button>Voltar a tela inicial</button>
        </div>
    )
}