import React from "react";

export default function Money({ money }) {

    return (

        <div>
            <div className="moneyBox">
                <div className="money">
                    <p>R${money}</p>
                </div>
            </div>
        </div>
    )
}