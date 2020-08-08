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

      allStrapiPaginas {
        nodes {
          id
          titulo
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No hubo resultados", result.errors)
  }

  // console.log(JSON.stringify(result.data.allStrapiPost))
  const posts = result.data.allStrapiPost.nodes
  const pages = result.data.allStrapiPaginas.nodes

  const postPerPage = 3

  const numPages = Math.ceil(posts.length / postPerPage)
  console.log(numPages)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/components/ListPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  console.log(posts)
  posts.forEach(post => {
    actions.createPage({
      path: urlSlug(post.title),
      component: require.resolve("./src/components/PostDetail.js"),
      context: {
        id: post.id,
      },
    })
  })

  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.titulo),
      component: require.resolve("./src/components/Pagina.js"),
      context: {
        id: page.id,
      },
    })
  })
}
