import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CounterBody from "./components/CounterBody";
import SetCounter from "./components/Setcounter";


function App() {

    let [inputValueMax, setInputValueMax] = useState('')
    let [inputValueMin, setInputValueMin] = useState('')
    let [data,setData] = useState(0)

    // useEffect(() => {
    //
    //     let valueAsStringMax = localStorage.getItem('ValueMax')
    //     let valueAsStringMin = localStorage.getItem('ValueMin')
    //     if (valueAsStringMax) {
    //
    //         let newValueMax = JSON.parse(valueAsStringMax)
    //         setInputValueMax(newValueMax)
    //     }
    //     if (valueAsStringMin) {
    //         let newValueMin = JSON.parse(valueAsStringMin)
    //         setInputValueMin(newValueMin)
    //     }
    //
    // }, [])

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueMax(e.currentTarget.value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueMin(e.currentTarget.value)
    }

    const valueSet = () => {
        localStorage.setItem('ValueMin', JSON.stringify(inputValueMin))
        localStorage.setItem('ValueMax', JSON.stringify(inputValueMax))
        let valueAsStringMin = localStorage.getItem('ValueMin')
        if (valueAsStringMin) {
            let newValueMin = JSON.parse(valueAsStringMin)
            setData(newValueMin)
            setData(JSON.parse(inputValueMin))
        }
    }

    const dataInc = ()=>{

        setData(data+1)
    }
    const dataReset = ()=>{
        setData(JSON.parse(inputValueMin) )
    }
    return (
        <div className="App">
            <SetCounter onChangeMaxValue={onChangeMaxValue} onChangeMinValue={onChangeMinValue} valueSet={valueSet}/>
            <CounterBody dataInc={dataInc} dataReset={dataReset} data={data}/>
        </div>
    );
}

export default App;
