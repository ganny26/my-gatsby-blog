import React from "react"
import Header from "../components/header"
import Styles from "../styles/container.module.css"
import Footer from '../components/footer'
import { useStaticQuery, graphql } from "gatsby"
const Container = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={Styles.container}>
      <nav>
        <h1> {data.site.siteMetadata.title}</h1>
        <Header />
      </nav>
      {children}
      <Footer />
    </div>
  )
}

export default Container
