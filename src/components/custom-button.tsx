import React, { useState, type ChangeEvent } from "react";
import { useCalculatorStore } from "../store/calculator.store";

export const CustomButton = () => {

  const store = useCalculatorStore();

  const [ isEditable, setIsEditable] = useState<boolean>(false);
  const [ inputValue  , setInputValue ] = useState<string>('');
  const [ buttonLabel, setButtonLabel ] = useState<string>('Custom');

  const handleClick = () => {
    setIsEditable(true);
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const currentValue = e.target.value;
    const decimalRegExp = /^\d*\.?\d*$/;
    const isValid = decimalRegExp.test(currentValue);

    if ( !isValid ) return;
    setInputValue(currentValue);
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
      setNewValue(e.currentTarget.value);
  }

  const handleEnter = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if ( e.key=== 'Enter' ){
      setNewValue(e.currentTarget.value);
    }
  }

  const setNewValue = (newValue: string)=> {
    store.setTip(Number(newValue));
    setIsEditable(false);
    setButtonLabel(`${newValue}%`)
  }

  return (

    <>
      {
        isEditable 
        ? ( <input 
            className="focus:outline-Green-400 p-2 text-right caret-Green-400 text-Green-900 font-bold text-2xl"
            type="text"
            onChange={handleChange}
            autoFocus
            value={inputValue}
            onKeyDown={handleEnter}
            onBlur={handleBlur}/>) 
        : (<button 
            className="text-2x1 font bold bg-Grey-200 rounded-[5px] cursor-pointer hover:bg-Grey-50 text-Grey-500 hover:text-Grey-400" 
            onClick={handleClick}>
            {buttonLabel}
          </button>)
      }
    </>
    
  )
}

