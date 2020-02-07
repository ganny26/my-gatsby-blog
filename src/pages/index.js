import React from "react"
import Container from "../components/container"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Styles from "../styles/index.module.css"
export default ({ data }) => {
  console.log("data", data)
  return <Container>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          className={Styles.titlelink}
          to={node.fields.slug}

        >
          <h3 className={Styles.titlespace}>
            {node.frontmatter.title}{" "}

          </h3>
        </Link>
        <span className={Styles.titlecolor}>
          {node.frontmatter.date}
        </span>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Container>
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`