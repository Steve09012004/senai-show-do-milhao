'use client'
import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Button from "./components/button";
import Help from "./components/helpButton";
import Respostas from "./components/respostas";
import Contador from "./components/contador";
import Money from "./components/dinheiro";
import Lose from "./components/lose";
import Win from "./components/win";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Inicio from "./components/inicio";
import DeveloperCredits from "./components/developerCredits";
import SenaiGamesPresentation from "./components/senaiGamesPresentation";
import Ranking from "./components/ranking";




export default function Home() {
  const questions = require('./questions.json')
  const rankingA = require('../../data/rankingA.json')
  const rankingB = require('../../data/rankingB.json')
  const rankingC = require('../../data/rankingC.json')
  const [ranking, setRanking] = useState(rankingA)
  const audioCertaResposta = useRef(null)
  const audioErradaResposta = useRef(null)
  const endTimer = useRef(null)
  const certeza = useRef(null)
  const questionAudio = useRef(null)
  const startAudio = useRef(null)
  const introAudio = useRef(null)
  const videoIntro = useRef(null)
  const ajudaAudio = useRef(null)
  const parabens = useRef(null)
  const palmas = useRef(null)
  const pergunta = useRef(null)

  const [enunciado, setEnunciado] = useState(0)
  const perguntaAtual = questions[enunciado]
  const [selected, setSelected] = useState(false)
  const [indice, setIndice] = useState("")
  const [ajuda, setAjuda] = useState(3)
  const [clickBtnHelp, setClickBtnHelp] = useState(false)
  const [clickBtnConfirm, setClickBtnConfirm] = useState(true)
  const [dinheiro, setDinheiro] = useState(0)
  const [time, setTime] = useState(30)
  const [mSeconds, setMSeconds] = useState(1000)
  const [visible, setVisible] = useState(false)
  const [blur, setBlur] = useState(true)
  const [aceitou, setAceitou] = useState(false);
  const [start, setStart] = useState(false)
  const [name, setName] = useState("")
  const [win, setWin] = useState(false)
  const [close, setClose] = useState(true)
  const [showRanking, setShowRanking] = useState(true)
  const [dificult, setDificult] = useState("a")

  const [showCredits, setShowCredits] = useState(true);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showGame, setShowGame] = useState(false);

  function startIntro() {
    introAudio.current.volume = 0.0;
    introAudio.current.play();

    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        introAudio.current.volume = i / 10;
      }, i * 500);
    }
  }

  function startVideo() {
    videoIntro.current.play()
  }


  function startGame() {
    if (showRanking == true) {
      setShowRanking(false)
    }
    setStart(true)
    if (enunciado == 0) {
      setEnunciado(1)
    }
    introAudio.current.pause()
    videoIntro.current.pause()
    startAudio.current.play()
  }

  function eliminarResposta() {
    setClickBtnHelp(true)

    if (ajuda > 0) {
      setAjuda(ajuda - 1)
      const divs = document.querySelectorAll('.respostaBox')
      const alternativasIncorretas = perguntaAtual.alternativas.filter(alt => alt !== perguntaAtual.resposta)

      const embaralhadas = alternativasIncorretas.sort(() => Math.random() - 0.5).slice(0, 2)

      for (const div of divs) {
        const p = div.querySelector('p')
        if (p && embaralhadas.includes(p.textContent.trim())) {
          let box = div.querySelector('.resposta')
          box.classList.add("elimined");
        }
      }
    } else {
      ajudaAudio.current.play()
    }
  }

  function alterIndex(indice) {
    if (clickBtnConfirm == false) {
      setClickBtnConfirm(true)
    }

    setTimeout(() => {
      certeza.current.play()
    }, 800)
    setTimeout(() => {
      setClickBtnConfirm(false)
    }, 1000)
    setIndice(indice)

  }

  function endTime() {
    endTimer.current.play()
    setVisible(true)
  }

  function verificarResposta(indice) {

    if (perguntaAtual.resposta == perguntaAtual.alternativas[indice]) {

      enunciado >= 32 ? winGame() : setEnunciado(enunciado + 1)
      setTimeout(() => {
        audioCertaResposta.current.play()
      }, 250)


      setTime(30);

      if (dinheiro === 0) {
        setDinheiro(30000)
      } else if (enunciado == 32 && dinheiro < 1000000) {
        setDinheiro(dinheiro + (1000000 - dinheiro))
      } else {
        setDinheiro(dinheiro + 30000)
      }
      const divs = document.querySelectorAll('.respostaBox')
      const marcado = document.querySelector('input[name="response"]:checked');
      if (marcado) {
        marcado.checked = false;
      }
      for (const div of divs) {
        let box = div.querySelector('.resposta')
        box.classList.remove("elimined")
        setClickBtnHelp(false)
        setClickBtnConfirm(true)
      }

    } else if (perguntaAtual.alternativas[indice] == null) {
      alert("Selecione uma questão")
    }

    else {
      setTimeout(() => {
        audioErradaResposta.current.play()
      }, 1500)
      setVisible(true)
    }
  }

  function restart() {
    salvarRanking()
    if (showRanking == false) {
      setShowRanking(true)
    }
    if (win == true) {
      setWin(false)
    }
    setVisible(false)
    startIntro()
    startVideo()
    const marcado = document.querySelector('input[name="response"]:checked');
    if (marcado) {
      marcado.checked = false;
    }
    if (enunciado > 0) {
      setEnunciado(0)
    }
    setTime(30)
    setDinheiro(0)
    setAjuda(3)
    setClickBtnHelp(false)
    setStart(false)
  }

  function winGame() {
    setEnunciado(enunciado + 1)
    setStart(false)
    setWin(true)
    parabens.current.play()
    palmas.current.play()
  }

  function onClose() {
    close ? setClose(false) : setClose(true)
  }

  async function salvarRanking() {
    const rankingData = {
      name: name,
      money: dinheiro,
      dificult: dificult
    }

    const res = await fetch('/api/save-ranking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rankingData)
    })

    const data = await res.json()
    console.log(data.message)
  }

  useEffect(() => {
    if (aceitou && questionAudio.current && enunciado >= 1 && enunciado <= 32) {
      setTimeout(() => {
        questionAudio.current.play()
      }, 1300)

    }
  }, [start, enunciado])

  useEffect(() => {
    if (blur == false) {
      setBlur(true)
    } else {
      setBlur(false)
    }
  }, [visible])

  return (
    <>
      {showRanking &&
        <Ranking
          ranking={ranking}
          onClose={onClose}
          close={close}
          setRanking={setRanking}
          rankingA={rankingA} 
          rankingB={rankingB} 
          rankingC={rankingC}
        />
      }
      {aceitou && (
        <>
          {showCredits && (
            <DeveloperCredits onComplete={() => {
              setShowCredits(false);
              setShowPresentation(true);
            }} />
          )}
          {showPresentation && (
            <SenaiGamesPresentation onComplete={() => {
              setShowPresentation(false);
              setShowGame(true);
            }} startVideo={startVideo} />
          )}
        </>
      )}


      <div className={`main ${start ? "hideInicio" : "Box"}`}>
        <Inicio startGame={() => { startGame(); setAceitou(true); }} videoIntro={videoIntro} setName={setName} setMSeconds={setMSeconds} setDificult={setDificult}/>
      </div>
      <main id="main">
        <div className={blur ? "blurBack containner" : "containner"}>
          <audio ref={introAudio} src="audios/intro/intro.mp3"></audio>
          <audio ref={audioCertaResposta} id="certaResposta" src="audios/certaResposta.mp3"></audio>
          <audio ref={audioErradaResposta} id="erradaResposta" src="audios/erradaResposta.mp3"></audio>
          <audio ref={endTimer} id="endTime" src="audios/endTime.mp3"></audio>
          <audio ref={certeza} id="certeza" src="audios/certeza.mp3"></audio>
          <audio ref={startAudio} id="startaudio" src="audios/start.mp3"></audio>
          <audio ref={ajudaAudio} id="ajudaaudio" src="audios/ajuda.wav"></audio>
          <audio ref={parabens} id="parabens" src="audios/parabens.mp3"></audio>
          <audio ref={palmas} id="palmas" src="audios/palmas.mp3"></audio>
          <audio ref={pergunta} id="palmas" src="audios/pergunta.mp3"></audio>

          {/*audios das questões */}
          <audio ref={questionAudio} id="questionAudio" src={perguntaAtual.audio}></audio>
          <div className="Studio"></div>
          <div className="boxLeft">
            <TopQuestion
              question={perguntaAtual}
            />
            <div className="medBox">
              {perguntaAtual.alternativas.map((alternativa, index) => (
                <Respostas
                  key={index}
                  alternativa={alternativa}
                  indice={index}
                  onClick={alterIndex}
                  selected={selected}
                />
              ))}
            </div>
            <div className="buttonsBox">
              <Button
                clickBtnConfirm={clickBtnConfirm}
                indice={indice}
                onClick={verificarResposta}
              />
              <Help
                clickBtn={clickBtnHelp}
                onClick={eliminarResposta}
                ajuda={ajuda}
              />
            </div>
          </div>
          <div className="boxRight">
            <div className="topBox">
              <div>
                {!start ? (
                  <></>
                ) : (
                  <Contador time={time} setTime={setTime} endTime={endTime} mSeconds={mSeconds} />
                )}
              </div>
              <Money money={dinheiro} />
            </div>
          </div>
        </div>

        <div className={visible ? 'loseBoxMain' : 'hide'}>
          <Lose
            money={dinheiro}
            restart={restart}
          />
        </div>
        <div className={win ? 'loseBoxMain' : 'hide'}>
          <Win
            money={dinheiro}
            restart={restart}
          />
        </div>
        <div className={!aceitou ? "termsBoxMain" : "hide"}>
          <div className={!aceitou ? "termsBox" : "hide"}>
            <h2>Ao jogar você concorda com os termos de uso.</h2>
            <div className="buttons">
              <button className="decline" onClick={() => { window.location.href = "https://www.google.com.br"; setBlur(false); }}>Recusar</button>
              <button onClick={() => { setBlur(false), setAceitou(true), startIntro() }}>Aceitar os Termos</button>
            </div>
            <a className="terms" href="termosDeUso">Ler termos de Uso</a>
          </div>
        </div>
      </main>
    </>
  );
}
