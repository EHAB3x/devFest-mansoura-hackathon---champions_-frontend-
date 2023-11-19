import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'
const Article = ({source, title, desc,id}) => {
  return (
    <Link to={`/articles/${id}`} className='article'>
        <img src={source} alt="article" />
        <h2>{title}</h2>
        <p>{desc}</p>
    </Link>
  )
}

export default Article