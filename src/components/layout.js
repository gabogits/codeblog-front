import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import "./../assets/css/reset.css"
import "./../assets/css/base.css"
import "./../assets/css/forms.css"
import "./../assets/css/large-devices.css"
import "./../assets/css/medium-devices.css"
import "./../assets/css/small-devices.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content="Libreria de codigo" />
        <title>Blog code </title>
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
