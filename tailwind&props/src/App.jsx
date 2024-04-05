import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  const userName="Mayank";

  return (
    <>
      <h1 className='bg-blue-400 rounded-xl p-4 text-black m-5'>Trying Tailwind CSS</h1>
      <Card userName="Mayank"/>
      <Card userName="Delba"/>
    </>
  )
}

export default App
