import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import styles from './Skills.module.css';

import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


const Skills = () => {
  return (
      <section className={styles.container} id='skills'>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.content}>
              <div className={styles.skills}>
                  <div className={styles.div}>
                  <div className={styles.icons}>
                          <FaPython size={80} color='yellow' /> 
                    </div>
                    <p className={styles.name}>Python</p>
                  </div>
                  
                
                  
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <DiMysql size={ 80} color='blue' />
                      </div>  
                      <p className={styles.name}>SQL</p>
                </div>
                  
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <FaReact size={ 80} color='blue' />
                  </div>
                  <p className={styles.name}>React</p>
                    </div>
                  
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <IoLogoJavascript size={ 80} color='green' />
                      </div>
                      <p className={styles.name}>Javascript</p>
                  </div>
                 
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <FaBootstrap size={ 80} color='purple' />
                      </div>
                      <p className={styles.name}>Bootstrap</p>
                    </div>
                  
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <FaHtml5 size={ 80} color='orange' />
                      </div>
                      <p className={styles.name}>HTML</p>
                    </div>
                  
                  <div className={styles.div}>
                  <div className={styles.icons}>
                      <FaCss3 size={ 80} color='blue' />
                      </div>
                      <p className={styles.name}>CSS</p>
                    </div>
                  

                  
              </div>


              <ul className={styles.history}>
                  {
                      history.map((historyItem, id) => {
                          return (
                              <li key={id} className={styles.historyItems}>
                                  {/* <img
                                      src={getImageUrl("historyItem.imageSrc")}
                                      alt={`${historyItem.organisation} Logo`} /> */}
                                  <div  className={styles.historyItemDetails}>
                                      <h3>{`${historyItem.education},${historyItem.organisation}`}</h3>
                                      <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                      <p>{`${historyItem.percentage}`}</p>
                                      
                                  </div>
                              </li>
                          );
                      })
                  }
              </ul>
          </div>
    </section>
  )
}

export default Skills;
