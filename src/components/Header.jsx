import React from 'react'

function Header(props) {
  const {darkmode, handleDarkmode} = props;
  console.log('header:',props);
  return (
  <header>
    <h1>Header</h1>
    <button onClick={handleDarkmode}>Dark Mode</button>
  </header>
  )
}

export default Header