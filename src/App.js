import React from 'react'
//extracting all the components files to one single line
import { Header , Footer, Body } from "./Components";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App