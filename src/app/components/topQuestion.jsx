
export default function TopQuestion({question}) {

    return (
        <div className="topBox">
            <img className="logo" src="/images/logo.png" alt="logo" />
            <div className="perguntas">
                <div className="pergunta">
                    <p>{question.enunciado}</p>
                </div>
            </div>
        </div>
    )
}