import { useState } from 'react'
import './App.css'
import Page from './components/Page';

function App() {
  const [darkmode, setDarkmode] = useState(false); //상태변화 감지

  const handleDarkmode=()=>{
    setDarkmode(!darkmode);
    console.log(darkmode);
  }

  return (
    <>
      <Page 
      darkmode={darkmode} 
      setDarkmode = {setDarkmode}
      handleDarkmode = {handleDarkmode}
      />
    </>
  )
}

export default App
