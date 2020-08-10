import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allStrapiPost {
        nodes {
          title
          description
          id
        }
      }
    }
  `)

  return posts.nodes.map(post => ({
    title: post.title,
    description: post.description,
    id: post.id,
  }))
}

export default usePosts
