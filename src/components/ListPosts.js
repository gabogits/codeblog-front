import React from "react"
import Post from "./Post"
import Layout from "./Layout"

import { Link, graphql } from "gatsby"
export const { posts } = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allStrapiPost(skip: $skip, limit: $limit, sort: {order: DESC, fields: id}) {
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
        created_at(fromNow: false)
        description
        id
      }
    }
  }
`
const ListPosts = props => {
  const posts = props.data.posts.nodes
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/archivo"
      : "/archivo/" + (currentPage - 1).toString()
  const nextPage = "/archivo/" + (currentPage + 1).toString()
  return (
    <Layout>
      <section className="modu">
        <div className="container">
          <div className="box-title ">
            <h2>Archivo </h2>
          </div>
          <div className="last-post list-post">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <div className="paginator">
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Anterior
              </Link>
            )}
            <ul>
              {Array.from({ length: numPages }, (_, i) => (
                <li key={`pagination-number${i + 1}`}>
                  <Link to={`${i === 0 ? "/archivo/" : "/archivo/" + (i + 1)}`} activeClassName="pagina-actual">
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
            {!isLast && (
              <Link to={nextPage} rel="next">
                {" "}
                Siguiente →
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}




export default ListPosts
