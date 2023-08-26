import React, { useState } from 'react'; 

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';


import './Footer.scss'; 
const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(res => {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }



  return (

    <>
      <h2 className='head-text'>Take a coffee & chat with me!</h2>

      <div className='app__footer-cards'>
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:tobias@hungwevision.com" className='p-text' >tobias@hungwevision.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a href="tel: +32486626025" className='p-text' >+32486626025</a>
          </div>
        </div>

        {!isFormSubmitted ?  
        
        <div className='app__footer-form app__flex'>
          <div className="app__flex">
            <input className='p-text' type="text" placeholder='Your name'  value={name} onChange={handleChangeInput} name="name" />
          </div>
          <div className="app__flex">
            <input className='p-text' type="email" placeholder='Your email'  value={email} onChange={handleChangeInput} name="email" />
          </div>
          <div className="app__flex">
            <textarea className='p-text' name="message" placeholder='Your message'  value={message} onChange={handleChangeInput} ></textarea>
          </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div className='app__footer-form app__flex'>
          <h3 className='heading-text'>Thank you, I received your message! <br></br> Have a lovely day 🌞</h3>
        </div>
      
      }

       

     
    
    </>
    
  );
}

export default AppWrap(
  MotionWrap(Footer,  'app__footer'), 
  'contact', 
  'app__primarybg'
  );  