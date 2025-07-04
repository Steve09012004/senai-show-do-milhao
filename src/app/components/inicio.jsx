import React, { useState } from "react";

import styles from "../inicio/page.css";
export default function Inicio() {
    const [nome, setNome] = useState("");

    const iniciarJogo = () => {
        alert(`Bem-vindo, ${nome}!`);
        // Aqui você pode redirecionar ou iniciar o jogo
    };

    return (
        <div className="inicio">
            <div id="Logo">
                <img src="images/show.png" alt="logo" />
            </div>
            <div id="Entrada">

                <div className="nome">
                <input
                    type="text"
                    placeholder="Digite o nome do jogador"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                
                />
                </div>


             
                <div className="começar">
                     <button onClick={iniciarJogo}>Começar</button>
                 </div>
            </div>
        </div>
    );
}
