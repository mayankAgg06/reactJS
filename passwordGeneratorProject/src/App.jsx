import { useState, useCallback, useEffect, useRef, useMemo, memo } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [numAllow,setNumallow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [password,setPassword] = useState("");

  let passwd="";
  
  let random = useMemo(()=>{
    const randomNum= Math.random();
    console.log(randomNum);
    return randomNum;
  }
    ,[numAllow]);
  

  const passwordGenerator= useCallback(()=>{
    
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str+= "0123456789";
    if(charAllow) str+= "*#@!%^$_+={}()";

    for(let i=1; i<=length; i++)
    {
      let char= Math.floor(Math.random()* str.length+1);
      passwd += str.charAt(char);
    }

    setPassword(passwd);

  },[numAllow,charAllow,length,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length, numAllow, charAllow, passwordGenerator])

  const passwordRef= useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.focus();
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,90);
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
      <div className='w-screen max-w-md mx-auto shadow-md rounded-lg m-8 p-2 text-green-600 bg-slate-600'>
        
        <h1 className='text-3xl text-center text-neutral-400 mt-5 mb-6 '>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input 
          type="text" 
          id ="password" 
          value={password} 
          className='outline-none px-2 py-4 w-full rounded-s-md' 
          placeholder='Password' 
          ref={passwordRef}
          readOnly
          />
          
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}>Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 m-3'>

            <input 
            type="range" 
            min={6} max={100} 
            value={length} 
            className='cursor-pointer' 
            id="lengthThis"
            onChange={(e)=>{setLength(e.target.value)}}  />

            <label className='text-orange-600' htmlFor="lengthThis">Length: {length} </label>

          </div>
          <div className='flex justify-end gap-x-1 ml-2 mr-2 mt-3 mb-3'>

            <input 
            type="checkbox" 
            defaultChecked = {numAllow} 
            id= "numAllowed" 
            onChange={()=>{
              setNumallow((prev)=> !prev);
            }} />
            <label className='text-white' htmlFor="numAllowed">Numbers</label>

            <input 
            type="checkbox" 
            defaultChecked = {charAllow} 
            id= "charAllowed" 
            onChange={()=>{
              setCharAllow((prev)=> !prev);
            }} />
            <label className='text-white' htmlFor="charAllowed">Characters</label>

          </div>
        </div>
        <h1>{random}</h1>
          <Child/>
      </div>
  )
  
}

const Child = memo(function (){
  return (
    <h1>{Math.random()*100}</h1>
  )
})

export default App
