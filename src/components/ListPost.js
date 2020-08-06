import React from "react"
import Post from "../components/Post"
import usePosts from "./../hooks/usePosts"
import useCategories from "../hooks/useCategories"
const ListItems = () => {
  const posts = usePosts()
  const categories = useCategories()

  return (
    <>
      <div className="filterBy">
        <div className="field">
          <div className="select-small ">
            <div className="select-simple__container">
              <select name="category">
                <option value=""> Por categorias</option>
                {categories.map(category => (
                  <option value={category.nombre} key={category.id}>
                    {category.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="list-post">
        <ul>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default ListItems
