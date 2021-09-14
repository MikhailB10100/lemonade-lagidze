import React from 'react'
import History1 from './History1'
import History2 from './History2'
import History3 from './History3'
import HistoryBlock from './HistoryBlock'

const History = React.forwardRef((props, ref) => {
  return (
    <div className="history__wrapper" ref={ref}>
      <History1 />
      <History2 />
      <History3 />
    </div>
  )
})

export default History
