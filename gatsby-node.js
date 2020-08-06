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
  console.log(pages)
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
