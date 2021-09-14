import React from 'react'
import { lemonades_white, syrups_white } from '@components/products2/svgs'
import products2Left from '@assets/products2-left.png'
import products2Right from '@assets/products2-right.png'

function Products2SecondPage() {
  return (
    <div className="products2__second-page">
      <div className="second-page__blocks">
        <div className="second-page__block second-page__lemonades">
          {lemonades_white}
          <p className="second-page__block-text">лимонады</p>
        </div>
        <div className="second-page__block second-page__syrups">
          {syrups_white}
          <p className="second-page__block-text">сиропы</p>
        </div>
      </div>
      <img className="second-page__image left-image" src={products2Left} />
      <img className="second-page__image right-image" src={products2Right} />
    </div>
  )
}

export default Products2SecondPage
