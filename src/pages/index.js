import React from "react"
import Layout from "./../components/Layout"
import Post from "./../components/Post"
import usePage from "../hooks/usePage"
import { graphql } from "gatsby"

const Home = ({
  data: {
    lastPost: { nodes },
  },
}) => {
  const inicio = usePage()

  const { contenido, imagen, summary, titulo } = inicio[0]
  const lastPost = nodes
  return (
    <Layout>
      <section className="modu banner gray-back-1">
        <div className="container banner-container">
          <div className="banner-txt">
            <h2>Un monton de código</h2>
            <h4>Nunca habia sido tan facil como hacer copi paste</h4>
            <p>
              Este blog incluye codigo JS, React, Gatsby, Graphql, next,
              firebase etc
            </p>
          </div>
          <figure className="banner-img">
            <img src={imagen.sharp.fluid.src} alt="banner" />
          </figure>
        </div>
      </section>

      <section className="modu">
        <div className="container">
          <div className="box-title ">
            <h2>Ultimos codigos </h2>
          </div>
          <div className="last-post list-post">
            {lastPost.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const { lastPost } = graphql`
  query {
    lastPost: allStrapiPost(skip: 0, limit: 5) {
      nodes {
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
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

export default Home
