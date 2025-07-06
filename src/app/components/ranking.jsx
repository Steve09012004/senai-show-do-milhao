'use client'
import React from "react"
import { useState, useEffect } from "react"

export default function Ranking({ ranking, onClose, close }) {
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