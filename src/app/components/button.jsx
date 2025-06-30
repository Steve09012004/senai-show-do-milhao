
export default function Button({indice, onClick}) {

    return (
        <div id="button">
            <button onClick={() => onClick(indice)}>CONFIRMAR</button>
        </div>
    )
}