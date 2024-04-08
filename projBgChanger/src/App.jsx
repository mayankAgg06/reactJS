import { useState } from 'react'

function App() {
  const [color,setColor]= useState("black");

  return(
    <>
    <div className='w-screen h-screen duration-100'
      style={{backgroundColor: color}}>
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-slate-100 p-4 rounded-md'>
          <button className='outline-none p-3 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none p-3 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={()=>setColor('blue')}>Blue</button>
          <button className='outline-none p-3 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none p-3 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none p-3 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={()=>setColor('purple')}>Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
