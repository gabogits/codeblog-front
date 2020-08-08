import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { format, register } from "timeago.js"
import { localeFunc } from "./../helpers/"
import Highlight from "react-highlight"
import "highlight.js/styles/atelier-cave.dark.css"

import { graphql } from "gatsby"

register("es_ES", localeFunc)

export const query = graphql`
  query($id: String!) {
    post: allStrapiPost(filter: { id: { eq: $id } }) {
      nodes {
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        codesection
        categories {
          nombre
        }
        created_at(fromNow: false)
        description
        id
      }
    }
  }
`

const Post = (props) => {

  const post = props.data.post.nodes
  const { currentPage, numPages } = props.pageContext

  const {
    title,
    description,
    image,
    created_at,
    categories,
    codesection,
  } = post[0]

  
  return (
    <Layout>
      <div className="container">
        <div className="post-detail">
          <h3>{title}</h3>
          <figure>
            {image && image.sharp ? <Image fluid={image.sharp.fluid} /> : null}
          </figure>
          <div> {description}</div>
          <Highlight language="javascript"> {codesection}</Highlight>

          <span className="item-list-date">{format(created_at, "es_ES")} </span>

          <ul>
            {categories.map(tag => (
              <li key={tag.nombre}>{tag.nombre}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Post
