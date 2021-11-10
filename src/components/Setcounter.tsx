import React, {ChangeEvent} from 'react';
import s from './Setcounter.module.css'
import InputMax from "./Input";
import InputMin from "./InputMin";


type PropsType = {
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
    onChangeMinValue:(e: ChangeEvent<HTMLInputElement>)=>void
}

function SetCounter(props: PropsType) {




    return (
        <div className={s.counterBody}>
            <div className={s.counter}>
                <div>
                    <InputMax title={'value max:'} onChangeMaxValue={props.onChangeMaxValue}/>
                    <InputMin title={'value start:'} onChangeMinValue={props.onChangeMinValue}/>
                </div>
            </div>
            <div className={s.btn}>
                <button className={s.decBtn} >SET
                </button>
            </div>
        </div>
    )
}

export default SetCounter;