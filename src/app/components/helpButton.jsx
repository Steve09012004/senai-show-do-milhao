
export default function Help({clickBtn, onClick, ajuda}) {

    return (
        <div className="button" id="btnH">
            <button disabled={clickBtn} onClick={onClick}><p>Pedir Ajuda</p>
            </button>
            <span className="shelp">{ajuda}</span>
        </div>
    )
}