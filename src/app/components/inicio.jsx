import React, { useState } from "react";

import styles from "./page.css";
export default function Inicio({ startGame }) {
    const [nome, setNome] = useState("");

    return (

        <div className="inicio">
            <div id="Logo">
                <img src="images/show.png" alt="logo" />
            </div>
            <div id="Entrada">
                <form action={() => startGame(nome)}>
                    <div className="nome">
                        <input
                            type="text"
                            placeholder="Digite o nome do jogador"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required={true}
                            minLength={3}
                        />
                    </div>
                    <div className="começar">
                        <button type="submit">Começar</button>
                    </div>
                </form>
            </div>
        </div >

    );
}
