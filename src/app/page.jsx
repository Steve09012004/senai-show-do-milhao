'use client'
import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Button from "./components/button";
import Respostas from "./components/respostas";
import React from "react";
import { useState } from "react";



export default function Home() {

  function verificarResposta(indice) {
    if (perguntaAtual.resposta == perguntaAtual.alternativas[indice]){
      setEnunciado(enunciado + 1)
    }else {
      alert("Errou")
    }
  }

  const questions = require('./questions.json')

  const [enunciado, setEnunciado] = useState(0)
  const perguntaAtual = questions[enunciado]

  return (
    <main>
      <div className="boxLeft">
          <TopQuestion  question={perguntaAtual}/>

          <div className="medBox">
            {perguntaAtual.alternativas.map((alternativa, index) => (
              <Respostas 
                key={index}
                alternativa={alternativa}
                indice = {index}
                onClick={verificarResposta}
              />
            ))}
          </div>
          
          <Button onClick={verificarResposta}/>
      </div>
      <div className="boxRight">

      </div>
    </main>
  );
}
