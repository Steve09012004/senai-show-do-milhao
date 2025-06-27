'use client'
import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Button from "./components/button";
import React from "react";
import { useState } from "react";



export default function Home() {

  function verificarResposta() {
      setEnunciado(enunciado + 1)
  }

  const questions = require('./questions.json')

  const [enunciado, setEnunciado] = useState(0)

  return (
    <main>
      <div className="boxLeft">
          <TopQuestion  question={questions[enunciado]}/>
          
          <Button onClick={verificarResposta}/>
      </div>
      <div className="boxRight">

      </div>
    </main>
  );
}
