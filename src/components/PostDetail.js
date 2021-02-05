import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { format, register } from "timeago.js"
import { localeFunc } from "./../helpers/"
import Highlight from "react-highlight"
import ReactMarkdown from "react-markdown"

import { graphql } from "gatsby"

register("es_ES", localeFunc)

export const query = graphql`
  query($id: String!) {
    post: allStrapiPost(filter: { id: { eq: $id } }) {
      nodes {
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        codesection
        categories {
          nombre
        }
        createdAt(fromNow: false)
        description
        id
      }
    }
  }
`

const Post = props => {
  const post = props.data.post.nodes[0]

  const {
    title,
    description,
    image,
    created_at,
    categories,
    codesection,
  } = post

  return (
    <Layout>
      <section className="modu">
        
      <div className="container">
        <div className="post-detail">
        <div className="box-title ">
          
          <h3>{title}</h3>
         
          </div>
          {image && image.sharp && <figure> <Image fluid={image.sharp.fluid} /> </figure>}
          <div className="description"> 
          <ReactMarkdown>{description}</ReactMarkdown></div>
          <Highlight language="javascript" className="code-section">{codesection}</Highlight>

          
        <div className="info-tags">
          <ul>
            {categories.map(tag => (
              <li key={tag.nombre}>{tag.nombre}</li>
            ))}
          </ul>
          </div>
          <span className="item-list-date">{format(created_at, "es_ES")} </span>
        </div>
      </div>
      </section>
    </Layout>
  )
}

export default Post
