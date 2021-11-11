import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'

type propsType = {
    title: string
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
    inputValueMax:string | number
    inputValueMin:string | number
}

function InputMax(props: propsType) {


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input value={props.inputValueMax} className={props.inputValueMax<=props.inputValueMin ? s.errorMax : s.input} type="number" onChange={props.onChangeMaxValue} />
        </div>
    )
}


export default InputMax;