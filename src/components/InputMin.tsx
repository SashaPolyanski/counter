import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'
import InputMax from "./Input";

type propsType = {
    title: string
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    inputValueMax: number | null
    inputValueMin: number | null
}

function InputMin(props: propsType) {
    let maxValue = Number(props.inputValueMax)
    let minValue = Number(props.inputValueMin)


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input
                value={minValue}
                className={minValue>=maxValue? s.error : s.input}
                type="number" onChange={props.onChangeMinValue}/>
        </div>
    )
}


export default InputMin;