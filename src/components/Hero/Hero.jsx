// import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
      <section className={styles.container}>
          <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priti</h1>
        <div className={styles.text}>
        <p  className={styles.description}>
                      {/* "I'm a recent BSc.
                      Computer Science graduate
                      proficient in backend and
                      frontend technologies.
                      Skilled in Python, SQL,
                      Javascript, React.
                      Eager to contribute as
                      a versatile developer in a
                      dynamic environment." */}
            "Recent graduate with a degree in
            BSc Computer Science, enthusiastic about leveraging
            skills and knowledge to make impactful contributions in
             Software Development."
              </p>
              <a href="mailto:mhasepriti3@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
      </div>
      
      
                <img src={getImageUrl("hero/p3.jpg")} alt="hero image of me" className={styles.heroimg} />
          
          
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
          
    </section>
  )
}

export default Hero;
