import React, {useState} from 'react';
import s from './CounterBody.module.css'


function CounterBody() {


  let [data, setData] = useState(0);

  const onClickDecHandler = () => {
    setData(data - 1)
  }
  const onClickResetHandler = () => {
    setData(0)
  }
  const onClickIncHandler = () => {
    setData(data + 1)
  }


  return (
      <div className={s.counterBody}>
        <div className={data === 5 ? s.counterMAX : s.counter}>
            {data}
        </div>
        <div className={s.btn}>
          <button disabled={data === -5} className={s.decBtn} onClick={onClickDecHandler}>DEC
          </button>
          <button disabled={data === 0} className={s.resetBtn} onClick={onClickResetHandler}>RESET
          </button>
          <button disabled={data === 5} className={s.incBtn} onClick={onClickIncHandler}>INC
          </button>
        </div>
      </div>
  )
}

export default CounterBody;