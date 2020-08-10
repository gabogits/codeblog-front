import React from "react"
import { format, register } from "timeago.js"
import { localeFunc } from "./../helpers/"
import { Link } from "gatsby"
import Image from "gatsby-image"
import urlSlug from "url-slug"
register("es_ES", localeFunc)

const Post = ({ post }) => {
  const { title, description, image, created_at } = post

  return (
    <li className="item-list">
      <figure className="item-list-img">
        <Link to={'/'+urlSlug(title)}>
          {image && image.sharp ? <Image fluid={image.sharp.fluid}  alt="image"  /> : null}
        </Link>
      </figure>

      <div className="item-list-txt">
      <h3><Link to={'/'+urlSlug(title)}>
          {title}
        </Link></h3>
        <p>{description.substr(0, 300)}...</p>

       
        <span className="item-list-date">{format(created_at, "es_ES")} </span>
      </div>
    </li>
  )
}

export default Post
