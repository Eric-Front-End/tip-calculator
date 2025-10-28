interface Props{
  text:string;

}

export const Button = ( { text }: Props ) => {
  return (
    <button className="bg-Green-400 text-Green-900 uppercase font-bold text-center h-12 w-full rounded-[5px] cursor-pointer hover:bg-Green-200 transition-colors ">{text}</button>
  )
}
