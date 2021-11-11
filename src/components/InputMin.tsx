import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'
import InputMax from "./Input";

type propsType = {
    title: string
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    inputValueMax: any
    inputValueMin: any
}

function InputMin(props: propsType) {


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input
                value={props.inputValueMin}
                className={props.inputValueMax >= props.inputValueMin && props.inputValueMin > -1 ? s.input : s.error}
                type="number" onChange={props.onChangeMinValue}/>
        </div>
    )
}


export default InputMin;