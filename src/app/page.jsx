'use client'
import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Button from "./components/button";
import Respostas from "./components/respostas";
import Contador from "./components/contador";
import Money from "./components/dinheiro";
import React from "react";
import { useState } from "react";



export default function Home() {

  function alterIndex(indice) {
    setIndice(indice)
  }

  function verificarResposta(indice) {
    if (perguntaAtual.resposta == perguntaAtual.alternativas[indice]) {
      setEnunciado(enunciado + 1)
    } else {
      alert("Errou")
    }
  }

  const questions = require('./questions.json')

  const [enunciado, setEnunciado] = useState(0)
  const perguntaAtual = questions[enunciado]
  const [indice, setIndice] = useState("")

  return (
    <main>
      <div className="boxLeft">
        <TopQuestion question={perguntaAtual} />

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

        <Button
          indice={indice}
          onClick={verificarResposta}
        />
      </div>
      <div className="boxRight">
        <div className="topBox">
          <Contador />
          <Money />
        </div>

      </div>
    </main>
  );
}
