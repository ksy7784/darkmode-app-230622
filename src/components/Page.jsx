import React from 'react'
import Header from './Header'
import Main from './Main'

function Page(props) {
  const {darkmode, handleDarkmode} = props;
  console.log('page:',props);
  return (
    <div className='App'>
      <Header 
      darkmode = {darkmode}
      handleDarkmode = {handleDarkmode}
      />
      <Main darkmode = {darkmode}/>
    </div>
  )
}

export default Page