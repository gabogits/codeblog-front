import React, { useEffect } from "react"
import { format, register } from "timeago.js"
import { localeFunc } from "./../helpers/"
import { Link } from "gatsby"
import Image from "gatsby-image"
import urlSlug from "url-slug"
register("es_ES", localeFunc)

const Post = ({ post }) => {
  const { title, description, image, created_at, categories } = post

  return (
    <li className="item-list">
      <figure className="item-list-img">
        <Link to={urlSlug(title)}>
          {image && image.sharp ? <Image fluid={image.sharp.fluid} /> : null}
        </Link>
      </figure>

      <div className="item-list-txt">
        <Link to={urlSlug(title)}>
          <h3>{title}</h3>
        </Link>
        <p>{description.substr(0, 200)}...</p>

        <ul>
          {categories.map(tag => (
            <li key={tag.nombre}>{tag.nombre}</li>
          ))}
        </ul>
        <span className="item-list-date">{format(created_at, "es_ES")} </span>
      </div>
    </li>
  )
}

export default Post
