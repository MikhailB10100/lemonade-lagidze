import React from 'react'
import {
  drinks,
  recipe,
  conservants,
  factory,
  hands,
  nature,
  storages,
  time,
} from './svgs'

import back_product_1 from '@assets/back_product_1.png'

function Products1() {
  return (
    <div className="products1">
      <img className="products1__background" src={back_product_1} />
      <h3>ПРЕИМУЩЕСТВА</h3>
      <div className="products1__items-wrapper">
        <div className="products1__items-block">
          <div className="products1__item">
            {drinks}
            <span>изготовление лимонадов и сиропов</span>
          </div>
          <div className="products1__item">
            {recipe}
            <span>уникальная рецептура основателя </span>
          </div>
          <div className="products1__item">
            {conservants}
            <span>пищевые добавки отсутствуют в составе</span>
          </div>
          <div className="products1__item">
            {nature}
            <span>экологически безопасная упаковка товара</span>
          </div>
        </div>

        <div className="products1__items-block">
          <div className="products1__item">
            {time}
            <span>проверенная столетним опытом работы марка</span>
          </div>
          <div className="products1__item">
            {factory}
            <span>производство на территории Ленинградской обл.</span>
          </div>
          <div className="products1__item">
            {storages}
            <span>длительный срок хранения продукции</span>
          </div>
          <div className="products1__item">
            {hands}
            <span>отлаженная система сотрудничества</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products1
