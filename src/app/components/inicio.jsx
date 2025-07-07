import { useEffect, useState } from 'react';

import styles from './page.css'

export default function Inicio({ startGame, videoIntro, setName, setMSeconds, setDificult }) {


  return (
    <div className='Box'>
      <div className="main">
        <video ref={videoIntro} id='introVideo' muted loop playsInline src="videos/intro.mp4"></video>
        <div className="inicio">
          <div id="Logo"><span><img src="/videos/milho.gif" alt="milho gif" /></span></div>
          <div id="Entrada">
            <form action={() => startGame()}>
              <div className="nome">
                <input
                  type="text"
                  placeholder="Digite o nome do jogador"
                  id="nomeInput"
                  required
                  minLength="3"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="dificult">
                <label>
                  <input
                  required
                    type="radio"
                    name="dificult"
                    value="Fácil"
                    onChange={() => {setMSeconds(1000); setDificult("a");}}
                    defaultChecked
                  />
                  <span>Fácil</span>
                </label>

                <label>
                  <input
                  required
                    type="radio"
                    name="dificult"
                    value="Médio"
                    onChange={() => {setMSeconds(450); setDificult("b");}}
                  />
                  <span>Médio</span>
                </label>
                <label>
                  <input
                  required
                    type="radio"
                    name="dificult"
                    value="Difícil"
                    onChange={() => {setMSeconds(200); setDificult("c");}}
                  />
                  <span>Difícil</span>
                </label>
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
