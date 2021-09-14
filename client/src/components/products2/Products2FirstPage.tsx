import React from 'react'
import { lemonades_black, syrups_black } from '@components/products2/svgs'
import {
  firstImagesRow,
  secondImagesRow,
} from '@components/products2/first-page-images'

function Products2FirstPage() {
  return (
    <div className="products2__first-page">
      <h3 className="first-page__header">ПРОДУКЦИЯ</h3>
      <div className="first-page__blocks">
        <div className="first-page__block">
          {lemonades_black}
          <p className="first-page__block-text">лимонады</p>
        </div>
        <div className="first-page__block">
          {syrups_black}
          <p className="first-page__block-text">сиропы</p>
        </div>
      </div>
      <div className="first-page__first-text-blocks">
        <p className="first-page__text-block">
          Фирменные стеклянные бутылки объёмами 0,33л и 0,5л
        </p>
        <p className="first-page__text-block">
          Широкая линейка вкусов - 20 видов
        </p>
      </div>
      <div className="first-page__images">
        <div className="first-page__row">
          {firstImagesRow.map((item) => (
            <img className="first-page__image" src={item} />
          ))}
        </div>
        <div className="first-page__row">
          {secondImagesRow.map((item) => (
            <img className="first-page__image" src={item} />
          ))}
        </div>
      </div>
      <div className="first-page__second-text-blocks">
        <p className="first-page__text-block">
          Одноразовые ёмкости <br /> объёмами 20л и 30л
        </p>
        <p className="first-page__text-block">
          Одноразовые ёмкости <br /> объёмом 4л
        </p>
      </div>
    </div>
  )
}

export default Products2FirstPage
