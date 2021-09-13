import React from 'react'
import dashed from '@assets/dashed.png'

const HistoryBlock = ({ year, text, num }: any) => {
  return (
    <>
      <div className="history__content">
        <div className="history__year">{year}</div>
        <div className="history__text">{text}</div>
      </div>
      <div className="history__spacer" style={{display: num === 11 ? 'none' : 'block'}}>
        <img
          style={{
            transform: num % 2 ? 'scaleX(-1)' : 'scaleX(1)',
          }}
          src={dashed}
          alt="dashs"
        />
      </div>
    </>
  )
}

export default HistoryBlock
