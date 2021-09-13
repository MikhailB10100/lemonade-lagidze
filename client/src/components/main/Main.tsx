import React from 'react'
import main_background from '@assets/main_background.png'

const Main = React.forwardRef((props, ref) => {
  return (
    <div className="main" ref={ref}>
      <img className="main__background" src={main_background} />
      <div className="main__text">
        <p className="main__text-par">Лимонад</p>
        <p className="main__text-par">Лагидзе - </p>
        <p className="main__text-par">напиток</p>
        <p className="main__text-par">с выдающейся</p>
        <p className="main__text-par">историей</p>
      </div>
    </div>
  )
})

export default Main
