import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import UsePosts from "../hooks/usePosts"
import urlSlug from "url-slug"

const Search = ({openSearch}) => {

  const posts = UsePosts()
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  const getResults = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (search) {
      const query = posts.filter(
        post => post.title.toUpperCase().indexOf(search.toUpperCase()) > -1
      )
      setResults(query)
    } else {
      setResults([])
    }
    // eslint-disable-next-line
  }, [search])

  return (
    <>
    <div className={`search-field ${openSearch && 'active'  }`} >
      <div className="field-search">
        <button className="close-search"  onClick={() => setSearch("")} aria-label="close" ></button>
        <input type="text" value={search} onChange={e => getResults(e)} />
      </div>
      {search && 
      <ul>
        {results.map(post => (
          <li key={post.id}>
          
              <h3> <Link to={"/" + urlSlug(post.title)}>{post.title}</Link></h3>
              <p> <Link to={"/" + urlSlug(post.title)}>{post.description.substr(0, 100)} </Link></p>
           
          </li>
        ))}
      </ul>
      }
    </div>
    {search && <div className="screen" onClick={() => setSearch("")} onKeyDown={() => setSearch("")} tabIndex="0" role="button" aria-label="close"></div> }
    </>
  )
}

export default Search

/*




    */
