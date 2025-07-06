import React from "react"
export default function Lose({money, restart}) {
    return (
        <div className="winBox">
            <h1>Parabéns!!!</h1>
            <h2>Você ganhou: R${money}</h2>
            <button onClick={() => restart()}>Voltar a tela inicial</button>
        </div>
    )
}