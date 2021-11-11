import React, {} from 'react';
import s from './CounterBody.module.css'


type PropsType = {
    data: string | number
    dataInc: () => void
    dataReset: () => void
    inputValueMax: string | number
    inputValueMin: string | number
}


function CounterBody(props: PropsType) {


    return (
        <div className={s.counterBody}>
            {props.inputValueMax >= props.inputValueMin && props.inputValueMax >= 0 && props.inputValueMin >= 0 ?
                <div className={props.inputValueMax === props.data ? s.counterMAX : s.counter}>
                    {props.data}
                </div> : <div className={s.error}>Incorrect value!</div>}


            <div className={s.btn}>
                <button disabled={props.data === props.inputValueMin }
                        className={s.resetBtn} onClick={props.dataReset}>RESET
                </button>
                <button disabled={props.data === props.inputValueMax || props.inputValueMin>=props.inputValueMax}
                        className={s.incBtn} onClick={props.dataInc}>INC
                </button>
            </div>
        </div>
    )
}

export default CounterBody;