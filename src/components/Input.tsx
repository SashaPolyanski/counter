import React, {ChangeEvent} from 'react';
import s from './Maxinput.module.css'

type propsType = {
    title: string
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
}

function InputMax(props: propsType) {


    return (
        <div className={s.value}>
            <span className={s.span}>{props.title}</span>
            <input className={s.input} type="number" onChange={props.onChangeMaxValue} />
        </div>
    )
}


export default InputMax;