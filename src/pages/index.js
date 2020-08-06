import React from "react"
import Layout from "./../components/Layout"
import usePage from "../hooks/usePage"

import ListPost from "../components/ListPost"

const Home = () => {
  const inicio = usePage()

  const { contenido, imagen, summary, titulo } = inicio[0]

  return (
    <Layout>
      <h1>espacio </h1>
      <div className="container">
        <h2>{titulo}</h2>
        <p>{summary}</p>
        <img src={imagen.sharp.fluid.src} />
        -----
        <p>{contenido}</p>
        <ListPost />
      </div>
    </Layout>
  )
}

export default Home
