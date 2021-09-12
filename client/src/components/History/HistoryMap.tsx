import React from 'react'
import HISTORY_INFO from '@components/History/static_history_info'
import HistoryBlock from '@components/History/HistoryBlock'

function HistoryMap() {
  return (
    <div className="history-blocks">
      {HISTORY_INFO.map((item) => {
        const { year, text } = item
        return <HistoryBlock year={year} text={text} />
      })}
    </div>
  )
}

export default HistoryMap
