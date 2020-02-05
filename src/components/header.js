import React from 'react'
import { Link } from 'gatsby'
import Styles from '../styles/header.module.css'

export default () => {
  return (
    <ul className={Styles.navigation}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}