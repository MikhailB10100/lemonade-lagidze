import React from 'react'
import main_background from '@assets/main_background.png'
import back1 from '@assets/back.png'
import drink1 from '@assets/drink1.png'
import drink2 from '@assets/drink2.png'

const Main = React.forwardRef((props, ref) => {
  return (
    <div className="main" ref={ref}>
      <img className="main__background" src={back1} />
      <img className='main__drink1' src={drink1} alt='drink1' />
      <img className='main__drink2' src={drink2} alt='drink2' />
      <div className='main__blur'/>
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
