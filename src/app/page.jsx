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



export default function Home() {
  const questions = require('./questions.json')
  const audioCertaResposta = document.getElementById("certaResposta")
  const audioErradaResposta = document.getElementById("erradaResposta")
  const endTimer = document.getElementById("endTime")
  const certeza = document.getElementById("certeza")
  const questionAudio = useRef(null)

  const [enunciado, setEnunciado] = useState(0)
  const perguntaAtual = questions[enunciado]
  const [indice, setIndice] = useState("")
  const [ajuda, setAjuda] = useState(3)
  const [clickBtnHelp, setClickBtnHelp] = useState(false)
  const [clickBtnConfirm, setClickBtnConfirm] = useState(true)
  const [dinheiro, setDinheiro] = useState(0)
  const [time, setTime] = useState(40)
  const [visible, setVisible] = useState(false)
  const [blur, setBlur] = useState(true)
  const [aceitou, setAceitou] = useState(false);


  function eliminarResposta() {
    setClickBtnHelp(true)
    setAjuda(ajuda - 1)
    const divs = document.querySelectorAll('.respostaBox')
    const alternativasIncorretas = perguntaAtual.alternativas.filter(alt => alt !== perguntaAtual.resposta)

    const embaralhadas = alternativasIncorretas.sort(() => Math.random() - 0.5).slice(0, 2)

    for (const div of divs) {
      const p = div.querySelector('p')
      if (p && embaralhadas.includes(p.textContent.trim())) {
        div.querySelector('.resposta').style.background = 'red';
      }
    }
  }

  function alterIndex(indice) {
    if (clickBtnConfirm == false){
      setClickBtnConfirm(true)
    }

    setTimeout(() => {
      certeza.play()
    }, 800)
    setTimeout(() => {
      setClickBtnConfirm(false)
    },1000)
    setIndice(indice)
    
  }

  function endTime() {
    if (aceitou) {

      endTimer.play()
      setVisible(true)
    }
  }

  function verificarResposta(indice) {

    if (perguntaAtual.resposta == perguntaAtual.alternativas[indice]) {
      setEnunciado(enunciado + 1)
      setTimeout(() => {
        audioCertaResposta.play()
      }, 250)
      

      setTime(40);

      if (dinheiro === 0) {
        setDinheiro(500)
      } else {
        setDinheiro(dinheiro * 2)
      }
      const divs = document.querySelectorAll('.respostaBox')
      for (const div of divs) {
        div.querySelector('.resposta').style.background = 'linear-gradient(to right, #3c6bf5, #4065f5)'
        setClickBtnHelp(false)
        setClickBtnConfirm(true)
      }

    } else if (perguntaAtual.alternativas[indice] == null) {
      alert("Selecione uma questão")
    }

    else {
      setTimeout(() => {
        audioErradaResposta.play()
      }, 1500)
      setVisible(true)
    }
  }

  useEffect(() => {
    if (aceitou && questionAudio.current) {
      setTimeout(() => {
        questionAudio.current.play()
      }, 1300)
      
    }
  }, [aceitou, enunciado])
  
  useEffect(() => {
    setBlur(true)
  }, [visible])

  return (
<<<<<<< HEAD
    <main id="main">
=======
    <main>

      <div className="boxLeft">
          <TopQuestion  question={perguntaAtual}/>
>>>>>>> 23d57129a77c8a53f8763e61593de7b4036f0b03

      <div className={blur ? "blurBack containner" : "containner"}>
        <audio id="certaResposta" src="audios/certaResposta.mp3"></audio>
        <audio id="erradaResposta" src="audios/erradaResposta.mp3"></audio>
        <audio id="endTime" src="audios/endTime.mp3"></audio>
        <audio id="certeza" src="audios/certeza.mp3"></audio>

        {/*audios das questões */}
        <audio ref={questionAudio} id="questionAudio" src={perguntaAtual.audio}></audio>

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
              />
            ))}
          </div>
<<<<<<< HEAD
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
              {!aceitou ? (
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
        <Lose money={dinheiro} />
      </div>
      <div className={!aceitou ? "termsBoxMain" : "hide"}>
        <div className={!aceitou ? "termsBox" : "hide"}>
          <div className="buttons">
            <button className="decline" onClick={() => {window.location.href = "https://www.google.com.br";  setBlur(false);}}>Recusar</button>
            <button onClick={() => {setAceitou(true);  setBlur(false);}}>Aceitar os Termos</button>
          </div>
        <a className="terms" href="termosDeUso">Ler termos de Uso</a>
        </div>
=======
          
          <Button onClick={verificarResposta}/>
          
>>>>>>> 23d57129a77c8a53f8763e61593de7b4036f0b03
      </div>

    </main>
  );
}
