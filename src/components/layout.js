import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content="Libreria de codigo" />
        <title>Blog code </title>
        <link href="/assets/css/reset.css" rel="stylesheet" />
        <link href="/assets/css/base.css" rel="stylesheet" />
      </Helmet>

      <main className="top-bottom-space">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout

/*

        
*/
