import { useState, useContext } from 'react'
import './App.css'
//함수명 호출
import Page from './components/Page';
//변수명 호출
import {Context} from './Context';

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
