import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allStrapiPost {
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
  `)

  return posts.nodes.map(post => ({
    title: post.title,
    description: post.description,
    created_at: post.created_at,

    image: post.image,
    categories: post.categories,
    id: post.id,
  }))
}

export default usePosts
