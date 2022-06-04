import React, { useState } from "react"
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_686iyjc',
      'template_2w3jaoh',
      form.current,
      'zV8J_z8d3mBv4bnJS'
    )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
}
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
         

            <div className='right box_shodow'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
               
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
