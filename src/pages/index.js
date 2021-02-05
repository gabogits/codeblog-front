import React from "react"
import Layout from "./../components/Layout"
import Post from "./../components/Post"
import usePage from "../hooks/usePage"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
const Home = ({
  data: {
    lastPost: { nodes },
  },
}) => {
  const inicio = usePage()

  const { contenido, imagen, summary, titulo } = inicio[0]
  const lastPost = nodes;
  console.log(lastPost)
  return (
    <Layout>
      <section className="banner black-back-1">
        <div className="container banner-container">
          <div className="banner-txt">
            <h2>{titulo}</h2>
            <h4>{summary}.</h4>
            <ReactMarkdown>
              {contenido}
            </ReactMarkdown>
          </div>
          <figure className="banner-img">
            <img src={imagen.sharp.fluid.src} alt="banner" />
          </figure>
        </div>
      </section>

      <section className="modu">
        <div className="container">
          <div className="box-title ">
            <h2>Ultimos códigos </h2>
          </div>
          <div className="last-post list-post">
            <ul>
            {lastPost.map(post => (
              <Post key={post.id} post={post} />
            ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const { lastPost } = graphql`
  query {
    lastPost: allStrapiPost(skip: 0, limit: 3, sort: {order: DESC, fields: createdAt}) {
      nodes {
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
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

export default Home
