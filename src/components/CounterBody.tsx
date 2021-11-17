import React, {} from 'react';
import s from './CounterBody.module.css'


type PropsType = {
    data: number | null
    dataInc: () => void
    dataReset: () => void
    inputValueMax: number | null
    inputValueMin: number | null
}


function CounterBody(props: PropsType) {

    let maxValue = Number(props.inputValueMax)
    let minValue = Number(props.inputValueMin)

    return (
        <div className={s.counterBody}>
            {maxValue >= minValue && maxValue >= 0 && minValue >= 0 ?
                <div className={maxValue === props.data ? s.counterMAX : s.counter}>
                    {props.data}
                </div> : <div className={s.error}>Incorrect value!</div>}
            <div className={s.btn}>
                <button disabled={props.data === props.inputValueMin }
                        className={s.resetBtn} onClick={props.dataReset}>RESET
                </button>
                <button disabled={props.data === maxValue || minValue>=maxValue}
                        className={s.incBtn} onClick={props.dataInc}>INC
                </button>
            </div>
        </div>
    )
}

export default CounterBody;