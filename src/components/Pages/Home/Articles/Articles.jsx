import React from 'react'
import Article from '../Article/Article'
import article1 from '../../../../Images/article1.png'
import article2 from '../../../../Images/article2.png'
import './Articles.css'
const Articles = () => {
  return (
    <div className='articles'>
        <h1 className="heading">Recommended Articles</h1>
        <div className="content">
        <Article id={"01"} source={article1} title={"HOW To know the disability of my children? "} desc={"Knowing the early warning signs and risk factors for childhood disabilities and delays is key to getting the early help your child may need. Early intervention is proven to be effective in helping children with special needs – either to overcome delays or help set them up for future success. .read more"}/>
        <Article id={"02"} source={article2} title={"Breaking Barriers: Sports and Recreation for Disabled Children"} desc={"Sports and recreational activities play a pivotal role in a child's development. Yet, many disabled children encounter limitations in participating due to physical or social barriers. This article delves into the significance of adaptive sports programs and accessible recreational activities..read more"}/>
        </div>
    </div>
  )
}

export default Articles