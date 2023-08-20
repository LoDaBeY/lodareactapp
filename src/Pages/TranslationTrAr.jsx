import React from 'react'
//import the components for every page, this one is Translation
import { Header , Footer, Body } from "../Components/index";

function TranslationTrAr() {
  return (
    <div>
      <Header/>
      <Body TrAR='Turkish Arabic Translator'/>
      <Footer/>
</div>
  )
}

export default TranslationTrAr