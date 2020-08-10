import React from "react"
import { Link } from "gatsby"
import Search from "./Search"

const Header = () => {
  return (
    <>
      <header>
        <div className="container container-visible container-header">
          <div className="logo">
            <figure>
              <Link to="/">miRepo</Link>
            </figure>
          </div>
          <Search />
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="pagina-actual">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/archivo" activeClassName="pagina-actual">
                  Archivo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
