import React, {ChangeEvent} from 'react';
import s from './Setcounter.module.css'
import InputMax from "./Input";
import InputMin from "./InputMin";


type PropsType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    valueSet: () => void
    inputValueMax: number | null
    inputValueMin: number | null
}

function SetCounter(props: PropsType) {

    let maxValue = Number(props.inputValueMax)
    let minValue = Number(props.inputValueMin)
    return (
        <div className={s.counterBody}>
            <div className={s.counter}>

                <div>
                    <InputMax
                        title={'value max:'}
                        onChangeMaxValue={props.onChangeMaxValue}
                        inputValueMax={props.inputValueMax}
                        inputValueMin={props.inputValueMin}/>
                    <InputMin
                        title={'value start:'}
                        onChangeMinValue={props.onChangeMinValue}
                        inputValueMax={props.inputValueMax}
                        inputValueMin={props.inputValueMin}/>
                </div>
            </div>
            <div className={s.btn}>
                <button
                    disabled={minValue>=maxValue}
                    className={s.decBtn}
                    onClick={props.valueSet}>SET
                </button>
            </div>
        </div>
    )
}

export default SetCounter;