import React from 'react'
import Category from '../Category/Category'
import limb from '../../../../Images/limbs.png'
import clothes from '../../../../Images/clothes.png'
import furniture from '../../../../Images/furniture.png'
import './Products.css'
const Products = () => {
  return (
    <div className='products'>
        <h1 className='heading text-center'>Our Products</h1>
        <div className="content">
            <Category source={limb} title="Artificial Limbs" category="limbs"/>
            <Category source={clothes} title="Baby Clothes" category="clothes"/>
            <Category source={furniture} title="Baby Furniture" category="furniture"/>
        </div>
    </div>
  )
}

export default Products