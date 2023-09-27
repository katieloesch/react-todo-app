import React from 'react'
import { BsGithub, BsCodeSlash} from'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { VscMail } from'react-icons/vsc'
import { BiLink } from'react-icons/bi'
import styles from './ContactIcons.module.css'


const ContactIcons = () => {
  return (
    <div className={styles.icons}>

        <div className={styles.icon} id={styles.code}>
            <a href="https://github.com/katieloesch/react-todo-app" target="_blank" rel="noopener noreferrer"><BsCodeSlash/></a>
        </div>

        <div className={styles.icon} id={styles.portfolio}>
            <a href="http://katieloesch.co.uk" target="_blank" rel="noopener noreferrer"><BiLink/></a>
        </div>
    
        <div className={styles.icon} id={styles.github}>
            <a href="http://github.com/katieloesch" rel="noopener noreferrer" target="_blank"><BsGithub /></a>
        </div>

        <div className={styles.icon} id={styles.mail}>
            <a href="mailto:katie.loesch@pm.me" target="_blank" rel="noopener noreferrer"><VscMail/></a>
        </div>

        <div className={styles.icon} id={styles.linkedin}>
            <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
        </div>

</div>

  )
}

export default ContactIcons