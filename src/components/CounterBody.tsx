import React, {} from 'react';
import s from './CounterBody.module.css'


type PropsType = {
    data:any
    dataInc: ()=>void
    dataReset:()=>void
    inputValueMax:any
    inputValueMin:any
}


function CounterBody(props:PropsType) {


  return (
      <div className={s.counterBody}>
          {props.inputValueMax>props.inputValueMin && props.inputValueMax> -1 && props.inputValueMin>-1 ?<div className={props.inputValueMax === props.data ? s.counterMAX : s.counter}>
              {props.data}
          </div> : <div className={s.error}>Incorrect value!</div>}


        <div className={s.btn}>
          <button disabled={!(props.inputValueMax >= props.inputValueMin && props.inputValueMin > -1)} className={s.resetBtn} onClick={props.dataReset}>RESET
          </button>
          <button disabled={!(props.inputValueMax >= props.inputValueMin && props.inputValueMin > -1)} className={s.incBtn} onClick={props.dataInc}>INC
          </button>
        </div>
      </div>
  )
}

export default CounterBody;