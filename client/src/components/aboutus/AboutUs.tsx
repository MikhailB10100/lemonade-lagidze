import React from 'react'

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <div className="about-us" ref={ref}>
      <div className="about-us__text">
        <p>Реквизиты</p>
        <p>Контактные данные</p>
      </div>
    </div>
  )
})

export default AboutUs
