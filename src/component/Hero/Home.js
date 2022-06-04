import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Jazz Gocon</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Front End Developer.", " Quality Assurance.", " UI/UX Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

          

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>LET'S CONNECT!</h4>
                <div className='button' >
                <a href="https://www.facebook.com/JazzGocon/" target="_blank" rel="noreferrer">
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  </a>
                  <a href="https://www.instagram.com/jazzgocon/" target="_blank" rel="noreferrer">
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  </a>
                  <a href="https://www.linkedin.com/in/jazzgocon/" target="_blank" rel="noreferrer">
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
           
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
