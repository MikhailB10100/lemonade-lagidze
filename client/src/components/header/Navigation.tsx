import React from 'react'
import NavItem from '@components/header/NavItem'

const Navigation = ({ refs }: any) => {
  const { home, history, production, partnership, aboutUs } = refs
  return (
    <nav className="header__navigation">
      <NavItem text={'Главная'} refTo={home} />
      <NavItem text={'История'} refTo={history} />
      <NavItem text={'Продукция'} refTo={production} />
      <NavItem text={'Партнерство'} refTo={partnership} />
      <NavItem text={'Мы'} refTo={aboutUs} />
    </nav>
  )
}

export default Navigation
