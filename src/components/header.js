import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo1.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <>
      <header>
        <div className="container container-visible container-header">
          <div className="logo">
            <figure>
              <Link to="/">
                <img src={logo.publicURL} alt="logotipo" />
              </Link>
            </figure>
          </div>
          <nav>
            <div className="user-public">
              <ul>
                <li>
                  <Link to="/acerca-de" activeClassName="pagina-actual">
                    Acerca de{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
