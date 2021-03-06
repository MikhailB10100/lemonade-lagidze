import React from 'react'
import HistoryBlock from './HistoryBlock'

const History1 = () => {
  const HISTORY_INFO: any = [
    {
      year: '1887',
      text: `Митрофан Лагидзе создал собственное предприятие и открыл в Кутаиси производство лимонадов на основе натуральных сиропов. Напитки, стоимостью 20 копеек за бутылку, мгновенно стали популярными.`,
      num: 1,
    },
    {
      year: '1900',
      text: `Маленькое производство превратилось в завод. Лагизде трепетно относился к соблюдению рецептуры напитков и строго следил за тем, чтобы все травы, ягоды и фрукты для сиропов собирались в определённых районах Грузии: от этого зависел вкус лимонадов и их репутация.`,
      num: 2,
    },
    {
      year: '1906',
      text: `Пришло время улучшить производство лимонадов. Митрофан переехал в Тбилиси, где открыл новый завод, а также легендарный магазин «Вода Лагидзе» на проспекте Руставели. Магазин стал культовым местом: вечерами у него собиралась грузинская интеллигенция для того, чтобы пообщаться и утолить жажду лимонадами. `,
      num: 3,
    },
  ]
  return (
    <>
      <h3 className="history__header history__block">ИСТОРИЯ</h3>
      {HISTORY_INFO.map((item) => {
        return <HistoryBlock year={item.year} text={item.text} num={item.num} />
      })}
    </>
  )
}

export default History1
