import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email-icon" />
          <a href="mailto:borbanayush09@gmail.com" target="_blank">
            borbanayush09@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn-icon"
          />
          <a
            href="https://www.linkedin.com/in/dhananjay-borban-a18515250/"
            target="_blank"
          >
            linkedin.com/dhananjay-borban
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/VviratT" target="_blank">
            github.com/VviratT
          </a>
        </li>
      </ul>
    </footer>
  );
}
