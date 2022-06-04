import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import TestimonialApi from "./TestimonialApi"
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faPhp,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import gocon_CV from './Gocon_UpdatedResume.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Testimonial = () => {
  const [data] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>VIEW MY SKILLS</h4>
            <h1>SKILLS</h1>
          </div>
          <div className='slide'>
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}

          {/*}  {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            {/*<div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                <i class='fas fa-arrow-left'></i>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                <i class='fas fa-arrow-right'></i>
              </button>
            </div>
          </div>
          </div>*/}


<div className="container about-page">
        <div className="text-zone">
    
          <p>
          I’m an aspiring web developer with hands-on experience in developing web applications like e-commerce store, directory systems, and organization’s web pages. The programming languages that I’ve gotten a hang of while developing those projects during the past years were HTML, CSS, Java, JavaScript, Visual Basic, Python, PHP, MySQL, and Kotlin.  I’ve also had an experience being a quality assurance in my time as an Intern.
          </p>
          <br/>
          <p align="LEFT">
          I can say that I pay strong attention to details and have excellent interpersonal skills. I also consider myself as technology-literate because I easily learn and understand things when it comes to technology. I am also proficient in the different Microsoft office tools.
          </p>
          <br/>
          <p>
            For a more detailed information regarding my skills and experiences, you can download my resume below!
          </p>
          <br/>
          <a href={gocon_CV} className='flat-button'> DOWNLOAD CV</a>
          </div>  
        </div>


<div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3Alt} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPhp} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>

           
          </div>
          
        </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Testimonial
