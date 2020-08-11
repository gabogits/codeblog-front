import { useStaticQuery, graphql } from "gatsby"

const usePage = () => {
  const { pagina } = useStaticQuery(graphql`
    query {
      pagina: allStrapiPaginas(filter: { titulo: { eq: "Repositorio de código reutilizable" } }) {
        nodes {
          contenido
          id
          titulo
          summary
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return pagina.nodes.map(page => ({
    titulo: page.titulo,
    summary: page.summary,
    contenido: page.contenido,
    imagen: page.imagen,
  }))
}

export default usePage
