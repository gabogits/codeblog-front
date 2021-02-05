const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPost {
        nodes {
          title
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No hubo resultados", result.errors)
  }

  // console.log(JSON.stringify(result.data.allStrapiPost))
  const posts = result.data.allStrapiPost.nodes
  console.log(result);
  console.log(posts);
  const postPerPage = 3

  const numPages = Math.ceil(posts.length / postPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/archivo` : `/archivo/${i + 1}`,
      component: require.resolve("./src/components/ListPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach(post => {
    actions.createPage({
      path: urlSlug(post.title),
      component: require.resolve("./src/components/PostDetail.js"),
      context: {
        id: post.id,
      },
    })
  })

  
}
