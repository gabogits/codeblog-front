import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useCategories = () => {
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allStrapiCategorias {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  return categories.nodes.map(category => ({
    nombre: category.nombre,
    id: category.id,
  }))
}

export default useCategories
