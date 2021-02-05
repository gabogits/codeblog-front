import React from "react"
import { format, register } from "timeago.js"
import { localeFunc } from "./../helpers/"
import { Link } from "gatsby"
import Image from "gatsby-image"
import urlSlug from "url-slug"
register("es_ES", localeFunc)

const Post = ({ post }) => {
  const { title, description, image, createdAt } = post

  return (
    <li className="item-list">
      {image && image.sharp ?  <figure className="item-list-img">
        <Link to={'/'+urlSlug(title)}>
          <Image fluid={image.sharp.fluid}  alt="image"  /> 
        </Link>
  </figure> : <div></div>}

      <div className="item-list-txt">
      <h3><Link to={'/'+urlSlug(title)}>
          {title}
        </Link></h3>
        <p><Link to={'/'+urlSlug(title)}>{description.substr(0, 250)}...</Link></p>

       
        <span className="item-list-date">{format(createdAt, "es_ES")} </span>
      </div>
    </li>
  )
}

export default Post
