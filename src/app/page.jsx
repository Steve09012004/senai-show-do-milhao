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
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Inicio from "./components/inicio";
import DeveloperCredits from "./components/developerCredits";
import SenaiGamesPresentation from "./components/senaiGamesPresentation";




export default function Home() {
  const questions = require('./questions.json')
  const audioCertaResposta = useRef(null)
  const audioErradaResposta = useRef(null)
  const endTimer = useRef(null)
  const certeza = useRef(null)
  const questionAudio = useRef(null)
  const startAudio = useRef(null)
  const introAudio = useRef(null)
  const videoIntro = useRef(null)

  const [enunciado, setEnunciado] = useState(0)
  const perguntaAtual = questions[enunciado]
  const [selected, setSelected] = useState(false)
  const [indice, setIndice] = useState("")
  const [ajuda, setAjuda] = useState(3)
  const [clickBtnHelp, setClickBtnHelp] = useState(false)
  const [clickBtnConfirm, setClickBtnConfirm] = useState(true)
  const [dinheiro, setDinheiro] = useState(0)
  const [time, setTime] = useState(30)
  const [visible, setVisible] = useState(false)
  const [blur, setBlur] = useState(true)
  const [aceitou, setAceitou] = useState(false);
  const [start, setStart] = useState(false)
  const [name, setName] = useState("")

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


  function startGame(name) {
    setName(name)
    setStart(true)
    if(enunciado == 0) {
      setEnunciado(1)
    }
    introAudio.current.pause()
    videoIntro.current.pause()
    startAudio.current.play()
  }

  function eliminarResposta() {
    setClickBtnHelp(true)
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
    if (aceitou) {

      endTimer.current.play()
      setVisible(true)
    }
  }

  function verificarResposta(indice) {

    if (perguntaAtual.resposta == perguntaAtual.alternativas[indice]) {
      setEnunciado(enunciado + 1)
      setTimeout(() => {
        audioCertaResposta.current.play()
      }, 250)


      setTime(30);

      if (dinheiro === 0) {
        setDinheiro(500)
      } else {
        setDinheiro(dinheiro * 2)
      }
      const divs = document.querySelectorAll('.respostaBox')
      const radio = document.querySelector('input[type="radio"]:checked');
      if (radio) {
        radio.checked = false;
      }
      for (const div of divs) {
        let box = div.querySelector('.resposta')
        box.classList.add("default");
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
    alert("Aqui")
    setVisible(false)
    const radio = document.querySelector('input[type="radio"]:checked');
      if (radio) {
        radio.checked = false;
      }
      if (enunciado > 0) {
        setEnunciado(0)
      }
      setTime(30)
      setDinheiro(0)
      setStart(false)
  }

  useEffect(() => {
    if (aceitou && questionAudio.current && enunciado>=1) {
      setTimeout(() => {
        questionAudio.current.play()
      }, 1300)

    }
  }, [start, enunciado])

  useEffect(() => {
    if (blur == false) {
      setBlur(true)
    }else {
      setBlur(false)
    }
  }, [visible])

  return (
    <>
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
        <Inicio startGame={() => { startGame(); setAceitou(true); }} videoIntro={videoIntro} />
      </div>
      <main id="main">
        <div className={blur ? "blurBack containner" : "containner"}>
          <audio ref={introAudio} src="audios/intro/intro.mp3"></audio>
          <audio ref={audioCertaResposta} id="certaResposta" src="audios/certaResposta.mp3"></audio>
          <audio ref={audioErradaResposta} id="erradaResposta" src="audios/erradaResposta.mp3"></audio>
          <audio ref={endTimer} id="endTime" src="audios/endTime.mp3"></audio>
          <audio ref={certeza} id="certeza" src="audios/certeza.mp3"></audio>
          <audio ref={startAudio} id="startaudio" src="audios/start.mp3"></audio>

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
              />
            </div>
          </div>
          <div className="boxRight">
            <div className="topBox">
              <div>
                {!start ? (
                  <></>
                ) : (
                  <Contador time={time} setTime={setTime} endTime={endTime} />
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
