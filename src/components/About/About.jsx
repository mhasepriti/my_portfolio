// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from './About.module.css';


const About = () => {
  return (
      <section className={styles.container} id="about">
          <h2 className={styles.title}>
              About
          </h2>
          <div className={styles.content}>
          <img
              src={getImageUrl("about/aboutImage.png")}
                  alt="me sitting with a laptop"
                  className={styles.aboutImage}/>
          <div className={styles.aboutItems}>
              <p className={styles.aboutItem}>
                  "Hello, I'm Priti, a recent graduate with a passion for
                  Software Development. Fresh out of Savitribai Phule Pune University
                  with a degree in BSc Computer Science, I'm eager to dive into the world
                  of IT industry.
              
              <br />
             
                  During my acadmic journey,I've honed my
                  skills in Python, SQL, Javascript,
                  Java, React, Bootstrap, HTML, CSS through 
                  coursework and personal projects.
                  I thrive on challenges and am excited about
                  the opportunity to apply my knowledge to
                      real-world problems.
                      <br />
                      In my portfolio, you'll find a collection of my projects
                      that demonstrate my dedication, creativity, and ability to
                      Achieve results. I'm eager to embark on a career where i can 
                      continue to learn, grow, and make meaningful contributions."
              </p>
              <div className={styles.aboutpdf}>
                  <a href="src/components/About/PRITI_MHASE_RESUME(1).pdf" className={styles.resume}>Download Resume</a>
              </div>
          </div>
          </div>
          
   </section>
  )
}

export default About
