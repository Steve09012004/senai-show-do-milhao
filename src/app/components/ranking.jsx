'use client'
import React from "react"
import { useState, useEffect } from "react"

export default function Ranking({ ranking, onClose, close, setRanking, rankingA, rankingB, rankingC }) {

    const first = rankingA
    const second = rankingB
    const third = rankingC
    return (
        <>
            {close ?
                <div onClick={() => onClose()} className="rankingClick">
                    <img src="/images/ranking.png" alt="ranking ico" />
                </div>
                :
                (
                    <div className="ranking">
                        <button className="ranking-close" onClick={() => onClose()}>
                            ×
                        </button>
                        <h1>Ranking</h1>
                        <div className="dificult">
                <label>
                  <input
                  required
                    type="radio"
                    name="dificult"
                    value="Fácil"
                    onChange={() => setRanking(first)}
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
                    onChange={() => setRanking(second)}
                  />
                  <span>Médio</span>
                </label>
                <label>
                  <input
                  required
                    type="radio"
                    name="dificult"
                    value="Difícil"
                    onChange={() => setRanking(third)}
                  />
                  <span>Difícil</span>
                </label>
              </div>
                        <ul>
                            {[...ranking]
                                .sort((a, b) => b.money - a.money)
                                .map((item, index) => (
                                    <li key={index}>
                                        <span>{item.name}</span>
                                        <span>R$ {item.money}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}

        </>
    )
}