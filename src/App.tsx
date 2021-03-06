import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CounterBody from "./components/CounterBody";
import SetCounter from "./components/Setcounter";


function App() {

    let [inputValueMax, setInputValueMax] = useState<number | null>(null)
    let [inputValueMin, setInputValueMin] = useState<number | null>(null)
    let [data, setData] = useState<number | null>(0)

    useEffect(() => {
        let valueAsStringMax = localStorage.getItem('ValueMax')
        let valueAsStringMin = localStorage.getItem('ValueMin')
        if (valueAsStringMax) {
            setInputValueMax(JSON.parse(valueAsStringMax))
        }
        if (valueAsStringMin) {
            setInputValueMin(JSON.parse(valueAsStringMin))
            setData(JSON.parse(valueAsStringMin))
        }
    }, [])

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueMax(Number(e.currentTarget.value))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueMin(Number(e.currentTarget.value))
    }

    const valueSet = () => {
        localStorage.setItem('ValueMin', JSON.stringify(inputValueMin))
        localStorage.setItem('ValueMax', JSON.stringify(inputValueMax))
        // let valueAsStringMin = localStorage.getItem('ValueMin')
        // let valueAsStringMax = localStorage.getItem('ValueMax')
        // if (valueAsStringMin) {
        //     let newValueMin = JSON.parse(valueAsStringMin)
        //     setData(newValueMin)
        //     setData(inputValueMin)
        // }
        // if (valueAsStringMax) {
        //     let newValueMax = JSON.parse(valueAsStringMax)
        //     setInputValueMax(JSON.parse(newValueMax))
        // }
        setData(inputValueMin)
    }

    const dataInc = () => {
        if (data) {
            setData(+data + 1)
        }
    }
    const dataReset = () => {
        setData(inputValueMin)
    }
    return (
        <div className="App">
            <SetCounter
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                valueSet={valueSet}
                inputValueMax={inputValueMax}
                inputValueMin={inputValueMin}/>
            <CounterBody
                dataInc={dataInc}
                dataReset={dataReset}
                data={data}
                inputValueMax={inputValueMax}
                inputValueMin={inputValueMin}/>
        </div>
    );
}

export default App;
