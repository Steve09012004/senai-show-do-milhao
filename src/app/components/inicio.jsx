import { useEffect, useState } from 'react';

import styles from './page.css'

export default function Inicio({startGame, videoIntro}) {


  const nome = ""

  return (
    <div className='Box'>
      <div className="main">
        <video ref={videoIntro} id='introVideo' muted loop playsInline src="videos/intro.mp4"></video>
        <div className="inicio">
          <div id="Logo"></div>
          <div id="Entrada">
            <form action={() => startGame(nome)}>
              <div className="nome">
                <input
                  type="text"
                  placeholder="Digite o nome do jogador"
                  id="nomeInput"
                  required
                  minLength="3"
                />
              </div>
              <div className="começar">
                <button type="submit">Começar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
