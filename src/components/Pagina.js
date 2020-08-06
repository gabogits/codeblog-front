import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    page: allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        contenido
        id
        titulo
        summary
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Page = ({
  data: {
    page: { nodes },
  },
}) => {
  const { contenido, id, titulo, summary, imagen } = nodes[0]

  return (
    <Layout>
      <div className="container">
        <h2>{titulo}</h2>
        <p>{summary}</p>
        <Image fluid={imagen.sharp.fluid} />
        -----
        <p>{contenido}</p>
      </div>
    </Layout>
  )
}

export default Page
