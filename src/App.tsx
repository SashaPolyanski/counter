import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CounterBody from "./components/CounterBody";
import SetCounter from "./components/Setcounter";


function App() {
    let [inputValue, setInputValue] = useState('')
    let [inputValueMin, setInputValueMin] = useState('')
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueMin(e.currentTarget.value)
    }
    useEffect(() => {
        let valueAsStringMax = localStorage.getItem('ValueMax')
        if (valueAsStringMax) {
            let newValueMax = JSON.parse(valueAsStringMax)
            setInputValue(newValueMax)
        }

    }, [])

    useEffect(() => {
        let valueAsStringMin = localStorage.getItem('ValueMin')
        if (valueAsStringMin) {
            let newValueMin = JSON.parse(valueAsStringMin)
            setInputValueMin(newValueMin)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('ValueMax', JSON.stringify(inputValue))
    }, [inputValue])
    useEffect(() => {
        localStorage.setItem('ValueMin', JSON.stringify(inputValueMin))
    }, [inputValueMin])


    return (
        <div className="App">
            <SetCounter onChangeMaxValue={onChangeMaxValue} onChangeMinValue={onChangeMinValue}/>
            <CounterBody/>
        </div>
    );
}

export default App;
