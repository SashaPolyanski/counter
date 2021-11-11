import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'

type propsType = {
    title: string
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
    inputValueMax:any
    inputValueMin:any
}

function InputMax(props: propsType) {


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input value={props.inputValueMax} className={ props.inputValueMax>=props.inputValueMin && props.inputValueMax > -1 ? s.input : s.errorMax} type="number" onChange={props.onChangeMaxValue} />
        </div>
    )
}


export default InputMax;