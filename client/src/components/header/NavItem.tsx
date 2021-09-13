import React from 'react'

function NavItem({ text, refTo }) {
  return (
    <a
      className="header__navigation-item"
      onClick={() => {
        window.scrollTo({
          top: refTo.current.offsetTop,
          behavior: 'smooth',
        })
      }}
    >
      {text}
    </a>
  )
}

export default NavItem
