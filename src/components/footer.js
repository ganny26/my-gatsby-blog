import React from 'react'
import Styles from '../styles/footer.module.css'
import * as Social from '../components/social'
export default () => {
  let date = new Date()
  return (
    <div className={Styles.blogfooter}>
      <div className={Styles.yearcontainer}>
        Selvaganesh © {date.getFullYear()}
      </div>
      <div className={Styles.socialcontainer}>
        <Social.Twitter />
        <Social.Linkedin />
        <Social.Stackoverflow />
        <Social.Youtube />
        <Social.Medium />
        <Social.Instagram />
      </div>
    </div>
  )
}