
export default function Help({clickBtn, onClick}) {

    return (
        <div className="button" id="btnH">
            <button disabled={clickBtn} onClick={onClick}><p>Pedir Ajuda</p>
            </button>
        </div>
    )
}