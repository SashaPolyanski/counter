import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'
import InputMax from "./Input";

type propsType = {
    title: string
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    inputValueMax: string | number
    inputValueMin: string | number
}

function InputMin(props: propsType) {


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input
                className={props.inputValueMin>=props.inputValueMax ? s.error : s.input}
                type="number" onChange={props.onChangeMinValue}/>
        </div>
    )
}


export default InputMin;