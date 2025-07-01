
export default function Button({clickBtnConfirm, indice, onClick}) {

    return (
        <div className="button" >
            <button disabled={clickBtnConfirm} id="btn" onClick={() => onClick(indice)}><p>Confirmar</p>
            </button>
        </div>
    )
}