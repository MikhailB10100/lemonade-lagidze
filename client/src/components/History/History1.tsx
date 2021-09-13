import React from 'react'
import HistoryBlock from '@components/History/HistoryBlock'
import { HistoryBlockProps } from '@components/History/interfaces'

function History1() {
  const HISTORY_INFO: HistoryBlockProps[] = [
    {
      year: '1887',
      text: `Митрофан Лагидзе создал собственное предприятие и открыл в Кутаиси производство лимонадов на основе натуральных сиропов. Напитки, стоимостью 20 копеек за бутылку, мгновенно стали популярными.`,
    },
    {
      year: '1900',
      text: `Маленькое производство превратилось в завод. Лагизде трепетно относился к соблюдению рецептуры напитков и строго следил за тем, чтобы все травы, ягоды и фрукты для сиропов собирались в определённых районах Грузии: от этого зависел вкус лимонадов и их репутация.`,
    },
    {
      year: '1906',
      text: `Пришло время улучшить производство лимонадов. Митрофан переехал в Тбилиси, где открыл новый завод, а также легендарный магазин «Вода Лагидзе» на проспекте Руставели. Магазин стал культовым местом: вечерами у него собиралась грузинская интеллигенция для того, чтобы пообщаться и утолить жажду лимонадами. `,
    },
  ]
  return (
    <div className="history__blocks">
      <h3 className="history__header">ИСТОРИЯ</h3>
      {HISTORY_INFO.map((item) => {
        const { year, text } = item
        return <HistoryBlock key={year} year={year} text={text} />
      })}
    </div>
  )
}

export default History1
