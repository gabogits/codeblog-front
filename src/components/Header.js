import React, {useState} from "react"
import { Link } from "gatsby"
import Search from "./Search"

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)

 
  return (
    <>
      <header>
        <div className="container container-visible container-header">
          <div className="logo">
            <figure>
              <Link to="/">miRepo</Link>
            </figure>
          </div>
         
          <nav>
            <ul>
            <li>
            <button className={`search-mobile ${openSearch && 'active'}`} onClick={() =>  setOpenSearch (!openSearch)} aria-label="search" ></button>
            </li>
              <li>
                <Link to="/" activeClassName="pagina-actual">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/archivo/" activeClassName="pagina-actual">
                  Archivo
                </Link>
              </li>
            </ul>
          </nav>
          <Search openSearch={openSearch} />
        </div>
      </header>
    </>
  )
}
export default Header
