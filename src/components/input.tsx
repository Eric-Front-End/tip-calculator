import { useState } from "react";

interface Props {
  label: string;
  value: number;
  iconUrl: string;
  setValue: (value:number)=> void;
  variant: "bill" | "people";
}

export const Input = ( {label, value, iconUrl, variant, setValue }:Props ) => {

  const [localValue, setLocalValue] = useState(value.toString());
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const userInput = e.target.value;
    
    const numbersRegExp = /^\d*$/;
    const decimalRegExp = /^\d*\.?\d*$/;

    const regExp = variant === 'bill' ? decimalRegExp : numbersRegExp;

    const isValid = regExp.test(userInput);

    if (!isValid) return;
    
    console.log(userInput);
    
    if (userInput === '0' || userInput.trim() === '' ){
      console.log('entre');
      setError(true);
    }else{
      setError(false);
      setValue(Number(userInput));
    }

    setLocalValue(userInput);
  }

  return (
    <div className="flex flex-col mb-8">
      <div className="flex justify-between" >
        <label 
        className="font-bold text-Grey-500 mb-2" 
        htmlFor="bill"
        >
          {label}
        </label>
        {
          error && (<p className="text-Orange-400 font-bold" >Can't be Zero</p>)
        }
        
      </div>

      <div className=" relative">
        <input 
          id="bill" 
          className={`bg-Grey-50 rounded-[5px] focus:outline-1 focus:outline-Green-400 ${error ? "focus:outline-Orange-400" : "focus:outline-Green-400"} cursor-pointer h-12 text-right pr-4 text-2xl font-bold text-Green-900 w-full`} 
          type="text" 
          value={localValue} 
          onChange={handleChange}
        >

        </input>
        <img className="absolute top-4 left-2" src={iconUrl} alt="Icon" />
      </div>
    </div>
  )
}

