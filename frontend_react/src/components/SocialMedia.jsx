import React from 'react'
import {BsTwitter, BsInstagram} from  'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa';



const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://twitter.com/HungweVision"> <BsTwitter/></a>
        </div>
        <div>
            <a href="https://www.facebook.com/tobiashungwe"><FaFacebookF/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/hungwevision/"><BsInstagram/></a>
        </div>
    </div>
  )
}



export default SocialMedia