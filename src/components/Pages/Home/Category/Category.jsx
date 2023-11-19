import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'
const Category = ({source, title, category}) => {
  return (
    <div className='category'>
        <img src={source} alt="" />
        <h2>{title}</h2>
        <Link to={category}>Show More</Link>
    </div>
  )
}

export default Category