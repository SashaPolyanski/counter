import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'

type propsType = {
    title: string
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
    inputValueMax:number | null
    inputValueMin:number | null
}

function InputMax(props: propsType) {
    let maxValue = Number(props.inputValueMax)
    let minValue = Number(props.inputValueMin)

    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input value={maxValue} className={maxValue<=minValue? s.errorMax : s.input} type="number" onChange={props.onChangeMaxValue} />
        </div>
    )
}


export default InputMax;