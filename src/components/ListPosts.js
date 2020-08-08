import React from "react"
import Post from "./Post"
import Layout from "./Layout"

import { Link, graphql } from "gatsby"
export const { posts } = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allStrapiPost(skip: $skip, limit: $limit) {
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
const ListPosts = props => {
  console.log(props)
  const posts = props.data.posts.nodes
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1? "/" : "/"+ (currentPage - 1).toString()
  const nextPage = "/"+ (currentPage + 1).toString()

  return (
    <Layout>
      <div className="list-post">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div class="paginator">
        {!isFirst && <Link to={prevPage} rel="prev">← Previous Page</Link>}
        <ul>
          {Array.from({ length: numPages }, (_, i) => (
            <li>
              <Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
            </li>
          ))}
        </ul>
        {!isLast && <Link to={nextPage} rel="next">Next Page →</Link>}
      </div>
    </Layout>
  )
}

export default ListPosts
