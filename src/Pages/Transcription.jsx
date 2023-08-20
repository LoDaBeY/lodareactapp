import React from 'react'
//import the components for every page, this one is Transcription
import { Header , Footer, Body } from "../Components/index";


function Transcription() {
  return (
    <div>
      <Header/>
      <Body Transcriptionist="Transcriptionist" />
      <Footer/>
</div>
  )
}

export default Transcription