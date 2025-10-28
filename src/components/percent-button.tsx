import { useCalculatorStore } from "../store/calculator.store";


interface Props{
  percent: number;
  isCostum?: boolean;
}

export const PercentButton = ( { percent, isCostum=false }: Props ) => {

  const store = useCalculatorStore();

  const isActive = store.tip === percent;

  const handleClick = ()=> {
    store.setTip(percent);
  }

  return (
    <button 
      className={` hover:bg-Green-200 hover:text-Green-900 ${isActive ? 'bg-Green-200 text-Green-900' : 'bg-Green-900 text-Grey-200'} transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer` } 
      onClick={handleClick}
    >
      {
        isCostum ? "Custom" : `${percent}%`
      }
      
    </button>
  )
}

