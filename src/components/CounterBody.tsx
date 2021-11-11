import React, {useState} from 'react';
import s from './CounterBody.module.css'


type PropsType = {
    data:any
    dataInc: ()=>void
    dataReset:()=>void
}


function CounterBody(props:PropsType) {



  return (
      <div className={s.counterBody}>
        <div className={s.counter}>
            {props.data}
        </div>
        <div className={s.btn}>
          <button className={s.resetBtn} onClick={props.dataReset}>RESET
          </button>
          <button disabled={false} className={s.incBtn} onClick={props.dataInc}>INC
          </button>
        </div>
      </div>
  )
}

export default CounterBody;