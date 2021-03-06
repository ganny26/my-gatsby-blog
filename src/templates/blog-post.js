import React from "react"
import Container from "../components/container"
import { graphql } from "gatsby"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`