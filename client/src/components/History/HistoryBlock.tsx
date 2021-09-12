import React from 'react'
import { HistoryBlockProps } from '@components/History/interfaces'

function HistoryBlock({ year, text }: HistoryBlockProps) {
  return (
    <div className="history-block">
      <div className="history-block__circle">
        <span className="history-block__year">{year}</span>
      </div>
      <div className="history-block__text">{text}</div>
    </div>
  )
}

export default HistoryBlock
