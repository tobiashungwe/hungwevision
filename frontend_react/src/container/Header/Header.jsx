import React, {useState} from 'react'; 
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion} from "framer-motion"
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants'; 
import './Header.scss';

const scaleVariants = { 
  whileInView: {
    scale: [0, 1], 
    opacity: [0, 1], 
    transition: { duration: 1, ease: 'easeInOut'}
}
}


const Header = () => {

  return (
    
    <div class="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition= {{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app-flex">
            <AnimationOnScroll animateIn="animate__jackInTheBox" initiallyVisible={true} duration={1.8} animateOut="animate__fadeInDown>">
              <section className="wavingHand">👋</section>
            </AnimationOnScroll>
            <div style={{marginLeft: 20}}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-Text">Tobias</h1>
            </div>
          </div>
          <div className="tag-cmp app-flex">
            <div>
              <div>
                  <p className="p-text title">I'm a</p>
                <strong>Back-End Developer</strong>
              </div>
              <AnimationOnScroll animateIn="animate__jackInTheBox" animateOut="animate__zoomOutDown">
              <p className="p-text secret">But ❤️ doing <strong>frontend</strong></p>
              </AnimationOnScroll>
              <p className="p-text">Student by 🌇  , Freelancer by 🌃 </p>
            </div>
          </div>
        </div>
      </motion.div>
    
    
      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition= {{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [ 0,1]}}
          transition= {{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    
    
      <motion.div
        variantt={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app_flex" key={`circle-${index}`} >
              <img src={circle} alt="circle" />
            </div>
        ))}
      </motion.div>
    
    </div>

  ); 
}

export default AppWrap(Header, "home");