import styles from "../page.css"

export default function Respostas({alternativa, indice, onClick}) {
    return (
        <div className="respostaBox">

            <div className="resposta" onClick={() => onClick(indice)}>
                <span>
                    <h1 className="number">{indice + 1}</h1>
                </span><div className="alternativa"><p>{alternativa}</p></div> 
            </div>

        </div>
    )
}