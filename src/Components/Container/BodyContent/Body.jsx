import React from 'react'
//call the css file to make it more 
import './body.css'
import './bodyresponsive.css'
import photo from '../../../Assets/profile.png'
const Body = () => {
  return (

      <section class="content">
      <div class="section1">
        <h2>Hello Visitor</h2>
        <h1>My Name's Khaled and I'm a <span class="TextChange"> ${'Developer'} </span></h1>
        <p>
          I am a professional translator, proofreader, and subtitler fluent in
          Turkish, English, and Arabic. <br />
          With over seven years of experience in visual content translation and
          localization, I am interested in the translator position you posted.
        </p>
        <div class="social-media">
          <a
            href="https://www.facebook.com/people/Khaled-M-Onem/pfbid02RDoZv2JRZVdtqmRFmuysgehP81JHawrMeFtNVAy3xuPkgXSuqLmi3DirBp3Pzw3Zl/"
          >
            <i class="bx bxl-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/khaledghoniem5124/">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/khaled-ghonim-4a4007147/">
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <button class="CV">
          <a
            href="/"
            >Download CV</a
          >
        </button>
      </div>

      <div class="section2">
        <img src={photo} alt="Image not found" class="img" />
      </div>
    </section>
  )
}

export default Body