import React from 'react'
import History1 from './History1'
import History2 from './History2'
import History3 from './History3'
import HistoryBlock from './HistoryBlock'

function History(props) {
  return (
    <>
      <div className="history__wrapper">
        <h3 className="history__header">ИСТОРИЯ</h3>
        <History1 />
        <History2 />
        <History3 />
      </div>
    </>
  )
}

export default History
