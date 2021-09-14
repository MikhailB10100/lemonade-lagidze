import React from 'react'
import products2Left from '@assets/products2-left.png'
import products2Right from '@assets/products2-right.png'
import { left } from '@components/products2/svgs'

function Products2() {
  return (
    <div className="products2">
      <div className="products2__first-page"></div>
      <div className="products2__second-page">
        <img className="second-page__image left-image" src={products2Left} />
        <img className="second-page__image right-image" src={products2Right} />
      </div>
    </div>
  )
}

export default Products2
