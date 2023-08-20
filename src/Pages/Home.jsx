import React from 'react'
//import the components for every page, this one is Home
import { Header , Footer, Body } from "../Components/index";
function Home() {

  return (
<div>
      <Header />
      <Body DevHome = 'Developer'/>
      <Footer/>
</div>
  )
}

export default Home